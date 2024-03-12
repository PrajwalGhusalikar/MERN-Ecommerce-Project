const express = require("express");
const router = express.Router();

const adminOrderController = require("../Controller/adminOrderController");
const authenticate = require("../Middleware/authenticate");

router.get("/", authenticate, adminOrderController.getAllOrders);

router.put(
  "/:orderId/confirmed",
  authenticate,
  adminOrderController.confirmedOrders
);

router.put(
  "/:orderId/shippedOrders",
  authenticate,
  adminOrderController.shippedOrders
);

router.put(
  "/:orderId/deliveredOrder",
  authenticate,
  adminOrderController.deliveredOrder
);

router.put(
  "/:orderId/cancledOrder",
  authenticate,
  adminOrderController.cancledOrder
);

router.put(
  "/:orderId/deleteOrder",
  authenticate,
  adminOrderController.deleteOrder
); //note: put method

module.exports = router;
