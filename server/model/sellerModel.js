const { Schema, model } = require("mongoose");

const sellerSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, select: false },

    role: { type: String, default: "seller" },
    status: { type: String, default: "pending" }, //approvel for the admin
    payment: { type: String, default: "inactive" }, //payment linked to the stripe
    method: { type: String, required: true }, // to denot which method he is used to sign in
    image: { type: String, default: "" },
    shopInfo: { type: Object, default: {} },
    isDeleted: { type: Boolean, default: false }, // Soft delete flag
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

module.exports = model("Seller", sellerSchema);
