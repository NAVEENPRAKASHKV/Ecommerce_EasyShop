const { Schema, model } = require("mongoose");

const customerSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    method: {
      type: String,
      required: true,
    },
    isBlocked: { type: Boolean, default: false },
    blockedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

module.exports = model("customers", customerSchema);
