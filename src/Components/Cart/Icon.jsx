import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartIcon = ({ cartItemCount, showCart }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Link to="/">
      <img
        src="https://m.media-amazon.com/images/I/31iH1SJizUL._AC_UF1000,1000_QL80_.jpg"
        style={{ height: '100px', padding: '25px' }}
        alt="Anime Shop Logo"
      />
    </Link>
    <h1>Anime Shop</h1>

    {cartItemCount > 0 && <div className="notification">{cartItemCount}</div>}
    <Link to="/cart">
      <ShoppingCartIcon
        className="cart"
        onClick={() => showCart(true)}
      />
    </Link>
  </div>
);

export default CartIcon;
