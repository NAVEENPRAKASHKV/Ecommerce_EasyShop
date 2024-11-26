const express = require("express");
const { authMiddleware } = require("../../middleweres/authMiddleware");
const router = express.Router();
const productController = require("../../controller/dashboard/productController");

router.post("/product-add", authMiddleware, productController.add_product);

module.exports = router;
