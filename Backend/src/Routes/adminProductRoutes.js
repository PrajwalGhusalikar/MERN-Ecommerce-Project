const express = require("express");
const router = express.Router();

const productController = require("../Controller/productController");

const authenticate = require("../Middleware/authenticate");

router.post("/", authenticate, productController.createProduct); //note

router.post("/create", authenticate, productController.createMultipleProducts);

router.delete("/:id", authenticate, productController.deleteProduct);

router.put("/:id", authenticate, productController.updateProduct);

module.exports = router; //note to export router
