const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
  {
    categoryName: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    slug: { type: String, required: true },
    isDeleted: { type: Boolean, default: false }, // Soft delete flag
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

categorySchema.index({
  categoryName: "text",
});

module.exports = model("Category", categorySchema);
