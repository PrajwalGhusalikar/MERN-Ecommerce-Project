const express = require("express");
const router = express.Router();

const productController = require("../Controller/productController");

const authenticate = require("../Middleware/authenticate");

router.get("/", authenticate, productController.getAllProducts); //note

router.delete("/:id/:id", authenticate, productController.findProductById);

module.exports = router; //note to export router
