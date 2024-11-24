const adminModel = require("../model/adminModel");
const sellerModel = require("../model/sellerModel");
const { responseReturn } = require("../utils/response");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/tokenCreate");
const sellerCustomerShema = require("../model/chat/sellerCustomerModel");

class AuthController {
  admin_login = async (req, res) => {
    const { email, password } = req.body;

    try {
      if (!email || !password) {
        return responseReturn(res, 400, {
          error: "Email and password are required",
        });
      }

      const admin = await adminModel.findOne({ email }).select("+password");
      if (!admin || !(await bcrypt.compare(password, admin.password))) {
        return responseReturn(res, 401, { error: "Invalid credentials" });
      }

      const token = await createToken({ id: admin.id, role: admin.role });

      res.cookie("accessToken", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      });

      return responseReturn(res, 200, { token, message: "Login successful" });
    } catch (error) {
      console.error("Error during admin login:", error);
      return responseReturn(res, 500, { error: error.message });
    }
  }; // End admin_login

  seller_register = async (req, res) => {
    const { email, password, username } = req.body;
    try {
      if (!email || !password || !username) {
        return responseReturn(res, 400, {
          error: "Email and password are required",
        });
      }
      const getUser = await sellerModel.findOne({ email });
      if (getUser) {
        return responseReturn(res, 404, {
          error: "Email already exist, please login",
        });
      }
      const seller = await sellerModel.create({
        email,
        username,
        password: await bcrypt.hash(password, 10),
        method: "manuel",
        shopInfo: {},
      });
      await sellerCustomerShema.create({
        myId: seller.id,
      });
      const token = await createToken({ id: seller.id, role: seller.role });
      res.cookie("accessToken", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      });
      console.log(token);

      responseReturn(res, 201, { token, message: "Register Successfully" });
    } catch (error) {
      console.error("Error during seller registration:", error);
      responseReturn(res, 500, { error: "Internal Server Error" });
    }
  }; //End seller_register
  seller_login = async (req, res) => {
    const { email, password } = req.body;

    try {
      if (!email || !password) {
        return responseReturn(res, 400, {
          error: "Email and password are required",
        });
      }

      const seller = await sellerModel.findOne({ email }).select("+password");
      if (!seller || !(await bcrypt.compare(password, seller.password))) {
        return responseReturn(res, 401, { error: "Invalid credentials" });
      }

      const token = await createToken({ id: seller.id, role: seller.role });

      res.cookie("accessToken", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      });

      return responseReturn(res, 200, { token, message: "Login successful" });
    } catch (error) {
      console.error("Error during admin login:", error);
      return responseReturn(res, 500, { error: error.message });
    }
  }; //End seller_login

  getUser = async (req, res) => {
    const { role, id } = req;
    try {
      if (role === "admin") {
        const user = await adminModel.findById(id);
        responseReturn(res, 200, { userInfo: user });
      } else {
        const seller = await sellerModel.findById(id);
        responseReturn(res, 200, { userInfo: seller });
      }
    } catch (error) {
      responseReturn(res, 500, { error: "internel server error" });
    }
  }; //End getUser
}

module.exports = new AuthController();
