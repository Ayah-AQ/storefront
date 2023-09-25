import React from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  addItemToCart,
  increaseProduct,
  decreaseProduct,
  removeItemFromCart,
  updateProductInStock,
} from "../../store/Actions/cartAction";
import CheckoutForm from "../checkOut";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    if (product.inStock > 0) {
      dispatch(addItemToCart(product));

      const updatedInStock = product.inStock - 1;
      dispatch(updateProductInStock(product.name, updatedInStock));
    }
  };

  const handleIncrease = (name) => {
    const item = cartItems.find((cartItem) => cartItem.name === name);
    if (item && item.inStock > 0) {
      dispatch(increaseProduct(name));

      const updatedInStock = item.inStock - 1;
      dispatch(updateProductInStock(name, updatedInStock));
    }
  };

  const handleDecrease = (name) => {
    const item = cartItems.find((cartItem) => cartItem.name === name);
    if (item && item.count > 1) {
      dispatch(decreaseProduct(name));

      const updatedInStock = item.inStock + 1;
      dispatch(updateProductInStock(name, updatedInStock));
    } else {
      handleRemoveItem(name);
    }
  };

  const handleRemoveItem = (name) => {
    dispatch(removeItemFromCart(name));

    const item = cartItems.find((cartItem) => cartItem.name === name);
    if (item) {
      const updatedInStock = item.inStock + item.count;
      dispatch(updateProductInStock(name, updatedInStock));
    }
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.count;
    });
    return total.toFixed(2); // Keep total as a float with two decimal places
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your purchase');
  };

  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <Typography variant="h4" gutterBottom>
          Your Cart
        </Typography>
        {cartItems.length === 0 ? (
          <Typography variant="body1">Your cart is empty.</Typography>
        ) : (
          <>
            {cartItems.map((item) => (
              <React.Fragment key={item.name}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={item.name} src={item.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "block" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {item.description}
                        </Typography>
                        <div className="price">{item.price}$</div>
                        <span>Quantity: {item.count}</span>
                        <br />
                        <span>In Stock: {item.inStock}</span>
                      </React.Fragment>
                    }
                  />
                  <Button variant="contained" onClick={() => handleIncrease(item.name)}>+</Button>
                  <Button variant="contained" onClick={() => handleDecrease(item.name)}>-</Button>
                  <Button variant="contained" onClick={() => handleRemoveItem(item.name)}>Remove</Button>
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))}
            <ListItem>
              <ListItemText
                primary="Total:"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "block" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                      className="total"
                    >
                      <span className="price"> {calculateTotal()}$</span>
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </>
        )}
      </List>

      <CheckoutForm handleSubmit={handleSubmit} />

    </div>
  );
}

export default Cart;
