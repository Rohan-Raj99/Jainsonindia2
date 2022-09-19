import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product-page"  element={<ProductPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
