const moongoose = require("mongoose");

const { Schema } = moongoose;

const categorySchema = new Schema({
  name: {
    type: Number,
    required: true,
    maxlength: 40,
  },
  parentCategory: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  level: {
    type: Number,
    required: true,
  },
});s

const Category = moongoose.model("categories", categorySchema);
module.exports = Category;