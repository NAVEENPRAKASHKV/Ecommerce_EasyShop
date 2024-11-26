const express = require("express");
const { authMiddleware } = require("../../middleweres/authMiddleware");
const router = express.Router();
const productController = require("../../controller/dashboard/productController");

router.post("/product-add", authMiddleware, productController.add_product);
router.get("/products-get", authMiddleware, productController.get_product);
router.get(
  "/product-get/:productId",
  authMiddleware,
  productController.get_editProduct
);
router.post(
  "/product-update",
  authMiddleware,
  productController.product_update
);

module.exports = router;
