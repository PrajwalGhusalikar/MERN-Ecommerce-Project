const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const authRouters = require("./Routes/authRoutes");
app.use("/auth", authRouters); //note why use and how to reflect endpoint

const userRouters = require("./Routes/userRoutes");
app.use("/users", userRouters);

const userProductRoutes = require("./Routes/userProductRoutes");
app.use("/api/products", userProductRoutes);

const adminProductRoutes = require("./Routes/adminProductRoutes");
app.use("/api/admin/products", adminProductRoutes);

const cartRoutes = require("./Routes/cartRoutes");
app.use("/api/cart", cartRoutes);

const cartItemRoutes = require("./Routes/cartItemRoutes");
app.use("/api/cart_items", cartItemRoutes);

const userOrderRoutes = require("./Routes/userOrderRoutes");
app.use("/api/orders", userOrderRoutes);

const adminOrderRoutes = require("./Routes/adminOrderRoutes");
app.use("/api/admin/orders", adminOrderRoutes);

const reviewRoutes = require("./Routes/reviewRoutes");
app.use("/api/reviews", reviewRoutes);

const ratingRoutes = require("./Routes/ratingRoutes");
app.use("/api/rating", ratingRoutes);

module.exports = app;
