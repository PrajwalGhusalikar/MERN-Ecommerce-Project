const express = require("express");
const router = express.Router();

const cartController = require("../Controller/cartController");

const authenticate = require("../Middleware/authenticate");

router.get("/", authenticate, cartController.findUserCart)

router.put("/add", authenticate, cartController.addItemToCart)

module.exports = router  //note to export router