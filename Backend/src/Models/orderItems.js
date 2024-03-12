const moongoose = require("mongoose");

const { Schema } = moongoose;

const orderItemSchema = new Schema({
  products: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "products",

  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  DiscountedPrice: {
    type: Number,

  },
  UserId: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
});

const OrderItems = moongoose.model("orderItems", orderItemSchema);
module.exports = OrderItems;
