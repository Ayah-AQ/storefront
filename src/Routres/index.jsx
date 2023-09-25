import React from 'react';
import { Routes, Route } from "react-router-dom";
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import ShoppingCart from '../Components/Cart/Sopping';

export default function Routers() {
  return (
    <Routes>
      <Route path="/products/:category"  element={<Products  />} />
      <Route path="/cart" element={<ShoppingCart/>} />
      <Route path="/" element={<Categories />} />
    </Routes>
  );
}
