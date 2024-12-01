const customerModel = require("../../model/customerModel");
const { responseReturn } = require("../../utils/response");
const sellerCustomerModel = require("../../model/chat/sellerCustomerModel");
const bcrypt = require("bcrypt");
const { createToken } = require("../../utils/tokenCreate");

class cutomerAuthController {
  customer_register = async (req, res) => {
    console.log("In customer register auth controller");

    // Trim inputs
    const { name, email, password } = req.body;
    const trimmedData = {
      name: name?.trim(),
      email: email?.trim(),
      password: password?.trim(),
    };

    try {
      // Validate input
      const {
        name: trimmedName,
        email: trimmedEmail,
        password: trimmedPassword,
      } = trimmedData;

      if (!trimmedName || !trimmedEmail || !trimmedPassword) {
        return responseReturn(res, 400, { error: "All fields are mandatory" });
      }

      // Check if customer already exists
      const existingCustomer = await customerModel.findOne({
        email: trimmedEmail,
      });
      if (existingCustomer) {
        return responseReturn(res, 400, {
          error: "You are already registered. Please login.",
        });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(trimmedPassword, 10);

      // Create a new customer
      const createCustomer = await customerModel.create({
        name: trimmedName,
        email: trimmedEmail,
        password: hashedPassword,
        method: "manual",
      });

      // Add entry in sellerCustomerModel for chat
      await sellerCustomerModel.create({
        myId: createCustomer._id,
      });

      // Generate JWT token
      const token = createToken({
        id: createCustomer._id,
        name: createCustomer.name,
        email: createCustomer.email,
        method: createCustomer.method,
      });

      // Set cookie with the token
      res.cookie("customerToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Use HTTPS in production
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week
      });

      return responseReturn(res, 201, {
        token,
        message: "User registered successfully",
      });
    } catch (error) {
      console.error(`Error in customer registration: ${error.message}`);
      return responseReturn(res, 500, { error: "Internal server error" });
    }
  };
}

module.exports = new cutomerAuthController();
