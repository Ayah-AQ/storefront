import * as types from "./Type";

export const addItemToCart = (product, quantity) => ({
  type: types.ADD_ITEM,
  payload: { ...product, count: quantity }, // Spread the product object and add the quantity property.
});

export const removeItemFromCart = (product) => ({
  type: types.REMOVE_ITEM,
  payload: product,
});

export const increaseProduct = (name, quantity) => {
  return {
    type: types.INCREASE,
    payload: { name, quantity }, // Provide the name and quantity as payload properties.
  };
};
