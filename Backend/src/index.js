const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

 const authRouters = require("./Routes/authRoutes")
 app.use("/auth", authRouters)  //note why use and how to reflect endpoint 


 const userRouters = require("./Routes/userRoutes")
 app.use("/users", userRouters)  //note why use and how to reflect endpoint 

module.exports = app;
              