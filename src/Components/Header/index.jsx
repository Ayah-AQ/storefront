import React from 'react';
import { Link } from 'react-router-dom';


export default function Headers() {
  return (
    <div style={{display:"flex" , justifyContent:"-moz-initial"}}>
      <Link to="/" > <img src='https://m.media-amazon.com/images/I/31iH1SJizUL._AC_UF1000,1000_QL80_.jpg ' style={{height:"100px", padding:'25px'}}/> </Link>
      <h1 >Anime Shop</h1>
    </div>
  );
}
