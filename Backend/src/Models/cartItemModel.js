const moongoose = require("mongoose");

const { Schema } = moongoose;

const cartItemSchema = new Schema({
  cart: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "cart",
    required: true,
  },
  products: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  Discount: {
    type: Number,
    required: true,
  },
  UserId: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
});

const CartItem = moongoose.model("cartItems", cartItemSchema);
module.exports = CartItem;
