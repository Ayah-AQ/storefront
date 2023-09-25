import React from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../store/Actions/actions";

const ProductDetails = ({ product }) => {
  const { productId } = useParams();

  const selectedProduct = fetchProducts(product, name);

  if (!selectedProduct) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h2>{selectedProduct.name}</h2>
      <p>{selectedProduct.description}</p>
      <p>Price: ${selectedProduct.price}</p>
      <p>In Stock: {selectedProduct.inStock}</p>
    </div>
  );
};

export default ProductDetails;
