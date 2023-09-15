import React from 'react'
import { Routes, Route } from "react-router-dom";
import Categories from '../Components/Categories';
import Products from '../Components/Products';



export default function Routers() {
  return (
    <div>
    <Routes>
   <Route path="/products"  element={<Products/>}/>
   <Route path="/"  element={<Categories/>}/>
  </Routes> 
       </div>
   
  )
}
