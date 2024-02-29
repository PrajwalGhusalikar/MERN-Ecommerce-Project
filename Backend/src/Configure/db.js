const mongoose = require("mongoose");

const mongoDbURL = "mongodb://localhost:27017";

const ConnectionToDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/EcommTest");
    console.log("Connection to Db Successfull");
  } catch (error) {
    handleError(error);
  }
};

module.exports = { ConnectionToDb };
