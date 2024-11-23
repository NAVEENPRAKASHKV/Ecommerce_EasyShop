const adminModel = require("../model/adminModel");
const { responseReturn } = require("../utils/response");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/tokenCreate");

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

  getUser = async (req, res) => {
    const { role, id } = req;
    try {
      if (role === "admin") {
        const user = adminModel.findById(id);
        responseReturn(res, 200, { userInfo: user });
      } else {
        console.log("seller info");
      }
    } catch (error) {}
  }; //End getUser
}

module.exports = new AuthController();
