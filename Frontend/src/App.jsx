// import { Home } from '@mui/icons-material';
import NavBar from "./Customer/Components/Navigation/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Customer/Pages/HomePage/HomePage";
import Products from "./Customer/Pages/Products/Products";
import { Footer } from "./Customer/Components/Footer/Footer";
import ProductDetails from "./Customer/Pages/ProductDetails/ProductDetails";
import Cart from "./Customer/Pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route exact path="/products" element={<Products />} />
        </Routes>

        <Routes>
          <Route exact path="/productdetails" element={<ProductDetails />} />
        </Routes>

       <Routes>
          <Route exact path="/cart" element={< Cart />} />
        </Routes>

        <div className="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
