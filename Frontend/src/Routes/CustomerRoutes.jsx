import React from "react";
import { Footer } from "../Customer/Components/Footer/Footer";
import OrderStatusPage from "../Customer/Pages/OrderStatusPage/OrderStatusPage";
import Order from "../Customer/Pages/OrderPage/Order";
import { Checkout } from "../Customer/Pages/Checkout/Checkout";
import Cart from "../Customer/Pages/Cart/Cart";
import ProductDetails from "../Customer/Pages/ProductDetails/ProductDetails";
import Products from "../Customer/Pages/Products/Products";
import HomePage from "../Customer/Pages/HomePage/HomePage";
import NavBar from "../Customer/Components/Navigation/NavBar";
import { Routes, Route } from "react-router-dom";
const CustomerRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route  path="/:levelOne/:levelTwo/:levelThree" element={<Products />} />
      </Routes>

      <Routes>
        <Route exact path="/productdetails" element={<ProductDetails />} />
      </Routes>

      <Routes>
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
      <Routes>
        <Route exact path="/order" element={<Order />} />
      </Routes>
      <Routes>
        <Route exact path="/orderstatus" element={<OrderStatusPage />} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
