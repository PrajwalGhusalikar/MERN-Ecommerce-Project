const express = require("express");
const router = express.Router();

const ratingController = require("../Controller/ratingController");

const authenticate = require("../Middleware/authenticate");

router.post("/create", authenticate, ratingController.createRating); //note

router.get(
  "/product/:productId",
  authenticate,
  ratingController.getProductRating
);

module.exports = router; //note to export router
