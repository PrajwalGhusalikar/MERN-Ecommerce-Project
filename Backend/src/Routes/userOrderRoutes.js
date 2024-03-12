const express = require("express");
const router = express.Router();

const UserOrderController = require("../Controller/userOrderController");

const authenticate = require("../Middleware/authenticate");

router.post("/", authenticate, UserOrderController.createOrder);

router.get("/user", authenticate, UserOrderController.orderHistory);

router.get("/:id", authenticate, UserOrderController.findOrderById);

module.exports = router; //note to export router
