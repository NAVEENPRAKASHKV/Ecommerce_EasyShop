const customerAuthController = require("../../controller/home/cutomerAuthController");
const express = require("express");
const router = express();

router.post(
  "/customer/customer-register",
  customerAuthController.customer_register
);

module.exports = router;
