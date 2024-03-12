const express = require("express");
const router = express.Router();

const reviewController = require("../Controller/reviewController");

const authenticate = require("../Middleware/authenticate");

router.post("/create", authenticate, reviewController.createReview); //note

router.get("/product/:productId", authenticate, reviewController.getAllReview);

module.exports = router; //note to export router
