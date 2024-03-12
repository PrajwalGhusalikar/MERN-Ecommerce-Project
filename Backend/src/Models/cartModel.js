const moongoose = require("mongoose");

const { Schema } = moongoose;

const cartSchema = new Schema({
  user: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  cartItems: [
    {
      type: moongoose.Schema.Types.ObjectId,
      ref: "cartItems",
      required: true,
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  totalItems: {
    type: Number,
    required: true,
    default: 0,
  },
  totalDiscountedPrice: {
    type: Number,
    required: true,
    default: 0,
  },

  discount: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Cart = moongoose.model("cart", cartSchema);
module.exports = Cart;
