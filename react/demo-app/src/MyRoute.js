import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productdetail/:productId" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoute;
