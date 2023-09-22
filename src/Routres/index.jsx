import React from 'react';
import { Routes, Route } from "react-router-dom";
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import Cart from '../Components/Cart';

export default function Routers() {
  return (
    <Routes>
      <Route path="/products/:category"  element={<Products  />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<Categories />} />
    </Routes>
  );
}
