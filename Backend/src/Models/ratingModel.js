const moongoose = require("mongoose");

const { Schema } = moongoose;

const ratingSchema = new Schema({
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
  rating: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Ratings = moongoose.model("ratings", ratingSchema);
module.exports = Ratings;
