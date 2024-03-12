const moongoose = require("mongoose");

const { Schema } = moongoose;

const addressSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  user: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  mobile: {
    type: String,
    required: true,
  },
});

const Address = moongoose.model("addresses", addressSchema);
module.exports = Address;
