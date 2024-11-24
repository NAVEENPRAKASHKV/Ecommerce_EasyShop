const { model, Schema } = require("mongoose");

const sellerCustomerShema = new Schema(
  {
    myId: {
      type: String,
      required: true,
    },
    myFriends: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = model("seller_customers", sellerCustomerShema);
