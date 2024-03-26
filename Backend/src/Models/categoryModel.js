const moongoose = require("mongoose");

const { Schema } = moongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    maxlength: 40,
  },
  parentCategory: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "category",   //old-category
  },
  level: {
    type: Number,
    required: true,
  },
});

const Category = moongoose.model("category", categorySchema);   //old-category
module.exports = Category;
