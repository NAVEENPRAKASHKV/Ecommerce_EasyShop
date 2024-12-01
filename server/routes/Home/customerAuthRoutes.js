const customerAuthController = require("../../controller/home/cutomerAuthController");
const express = require("express");
const router = express();

router.post(
  "/customer/customer-register",
  customerAuthController.customer_register
);
router.post("/customer/customer-login", customerAuthController.customer_login);

module.exports = router;
