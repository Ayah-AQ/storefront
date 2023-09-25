import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import Cart from "../Cart";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector((state) => state.cart); 
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Link to="/">
        <img
          src='https://m.media-amazon.com/images/I/31iH1SJizUL._AC_UF1000,1000_QL80_.jpg'
          style={{ height: "100px", padding: '25px' }}
          alt="Anime Shop Logo" 
        />
      </Link>
      <h1>Anime Shop</h1>

      {cart.items.length > 0 && (
        <div className="notification">{cart.items.length}</div>
      )}
      <Link to={"/cart"}>
      <ShoppingCartIcon
        className="cart"
        // onClick={() => setShowCart(!showCart)}
      /></Link>
      {cart.items.length > 0 && showCart && (
        <>
          <div className="triangle"></div>
          <div className="list">
            <Cart />
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
