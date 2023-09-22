import * as types from "./Type";
import axios from "axios";

export const addItemToCart = (product, quantity) => ({
  type: types.ADD_ITEM,
  payload: { ...product, count: quantity },
});

export const removeItemFromCart = (product) => ({
  type: types.REMOVE_ITEM,
  payload: product,
});

export const increaseProduct = (name, quantity) => ({
  type: types.INCREASE,
  payload: { name, quantity },
});

export const decreaseProduct = (name, quantity) => ({
  type: types.DECREASE,
  payload: { name, quantity },
});

export const updateServerInventory = (name, quantity) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `https://api-js401.herokuapp.com/api/v1/products/${name}`,
        { quantity }
      );

      if (response.status === 200) {
      } else {
      }
    } catch (error) {
      console.error("Error updating server inventory:", error);
    }
  };
};

export const updateCartItemQuantity = (name, quantity) => ({
  type: types.UPDATE,
  payload: { name, quantity },
});

export const updateProductInStock = (name, updatedInStock) => {
  return {
    type: types.UPDATE_PRODUCT_IN_STOCK,
    payload: {
      name,
      updatedInStock,
    },
  };
};