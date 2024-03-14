const moongoose = require("mongoose");

const { Schema } = moongoose;

const cartItemSchema = new Schema({
  userId: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
  cart: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "cart",
    required: true,
  },
  product: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: Number,
  
  },

});

const CartItem = moongoose.model("cartItems", cartItemSchema);
module.exports = CartItem;
