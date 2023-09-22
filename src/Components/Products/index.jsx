
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { fetchProducts } from "../../store/Actions/actions";
import { addItemToCart } from "../../store/Actions/cartAction";

function ProductItem({ product }) {
  const [quantity, setQuantity] = React.useState(1);
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity); 
    }
  };

  const handleAddToCart = () => {
    if (product.inStock > 0) {
      dispatch(addItemToCart({ ...product, quantity }));    }
  };

  return (
    <Paper
      sx={{
        backgroundColor: "#fff",
        padding: "10px",
        textAlign: "center",
        color: "#000",
      }}
    >
      <div className="imgContain">
        {/* <img
          src={product.image}
          alt={product.name}
          style={{ width: "-webkit-fill-available" }}
        /> */}
      </div>
      <h3 style={{ color: "red" }}>{product.name}</h3>
      <div className="price">${product.price} JD</div>
      <p>{product.description}</p>
      <div>
        <label htmlFor={`quantity-${product.name}`}>Quantity:</label>
        <input
  type="number"
  id={`quantity-${product.name}`}
  name={`quantity-${product.name}`}
  value={quantity}
  onChange={handleQuantityChange} 
  min="1"
/>

      </div>
      <button onClick={handleAddToCart} disabled={product.inStock === 0}>
        {product.inStock === 0 ? "Out of Stock" : "Add to Cart"}
      </button>
    </Paper>
  );
}

function Products() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(fetchProducts(selectedCategory));
    }
  }, [selectedCategory, dispatch]);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="productContain" style={{ padding: "10px" }}>
      <h1>{selectedCategory}</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item xs={4} key={product.name}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Products;
