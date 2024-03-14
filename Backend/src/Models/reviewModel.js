const moongoose = require("mongoose");

const { Schema } = moongoose;

const reviewSchema = new Schema({
  user: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true,
  }, 

  product: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Reviews = moongoose.model("reviews", reviewSchema);
module.exports = Reviews;
