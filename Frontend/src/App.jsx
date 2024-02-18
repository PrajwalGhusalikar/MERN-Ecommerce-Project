// import { Home } from '@mui/icons-material';
import NavBar from "./Customer/Components/Navigation/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Customer/Pages/HomePage/HomePage";
import Products from "./Customer/Components/Products/Products";
import { Footer } from "./Customer/Components/Footer/Footer";
import ProductDetails from "./Customer/Components/ProductDetails/ProductDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* <HomePage/> */}
        {/* <Products /> */}

        <ProductDetails/>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
