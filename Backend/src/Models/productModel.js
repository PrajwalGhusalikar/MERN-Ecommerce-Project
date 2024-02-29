const moongoose = require("mongoose");

const { Schema } = moongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discontedPrice: {
    type: Number,
  },
  discontedPercent: {
    type: Number,
  },
  quantity: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
  },
  color: {
    type: String,
  },
  sizes: [
    {
      name: { type: String },
      quantity: { type: Number },
    },
  ],
  imageUrl: {
    type: String,
  },
  ratings: [
    {
      type: moongoose.Schema.Types.ObjectId,
      ref: "ratings",
    },
  ],
  ratingNumbers: {
    type: Number,
    default: 0,
  },
  category: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = moongoose.model("products", productSchema);
module.exports = Product;
