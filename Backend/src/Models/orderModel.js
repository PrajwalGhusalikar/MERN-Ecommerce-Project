const moongoose = require("mongoose");

const { Schema } = moongoose;

const orderSchema = new Schema({
  User: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  orderItems: [
    {
      type: moongoose.Schema.Types.ObjectId,
      ref: "orderItems",
    },
  ],
  orderDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  deliveryDate: {
    type: Date,
  },
  shippingAddress: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "addresses",
    required: true,
  },

  paymentDetails: {
    paymentMethod: {
      type: String,
    },
    transactionId: {
      type: String,
    },
    paymentId: {
      type: String,
    },
    paymentStatus: {
      type: String,
    },
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  totalDiscountedPrice: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
    default: "PENDING",
  },
  totalItems: {
    type: Number,

  },
  creaatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Order = moongoose.model("orders", orderSchema);
module.exports = Order;
