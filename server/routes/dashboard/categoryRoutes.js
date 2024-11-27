const express = require("express");
const { authMiddleware } = require("../../middleweres/authMiddleware");
const router = express.Router();
const categoryController = require("../../controller/dashboard/categoryController");

router.post("/category-add", authMiddleware, categoryController.add_category);
router.get("/category-get", authMiddleware, categoryController.get_category);
router.put(
  "/category-update/:categoryId",
  authMiddleware,
  categoryController.update_category
);
router.put(
  "/category-delete/:categoryId",
  authMiddleware,
  categoryController.delete_category
);

module.exports = router;
