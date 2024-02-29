const moongoose = require("mongoose");

const { Schema } = moongoose;

const paymentInfoSchema = new Schema({
  User: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "users",
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
  totalItems: {
    type: Number,
    required: true,
  },
  creaatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const PaymentInfo = moongoose.model("paymentInfo", paymentInfoSchema);
module.exports = PaymentInfo;
