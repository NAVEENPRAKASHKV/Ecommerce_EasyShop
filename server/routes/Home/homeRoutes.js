const homeController = require("../../controller/home/homeController");
const express = require("express");
const router = express.Router();

router.get("/get-categories", homeController.get_categories);
router.get("/get-products", homeController.get_products);
router.get("/product-details/:slug", homeController.product_details);

module.exports = router;
