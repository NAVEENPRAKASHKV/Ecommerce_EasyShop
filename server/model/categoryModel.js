const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
  {
    categoryName: { type: String, required: true },
    image: { type: String, required: true },
    slug: { type: String, required: true },
  },
  { timestamps: true }
);

categorySchema.index({
  categoryName: "text",
});

module.exports = model("Category", categorySchema);
