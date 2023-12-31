import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItemToCart: (state, action) => {
      const { _id, name, category, price, quantity } = action.payload;
    
      
      const existingItem = state.items.find((item) => item._id === _id);
    
      if (existingItem) {
        
        existingItem.count += quantity;
        existingItem.inStock -= quantity;
      } else {
        
        const newItem = {
          _id,
          name,
          category,
          inStock: action.payload.inStock - quantity,
          price,
          count: quantity,
        };
        state.items.push(newItem);
      }
    },
    
    increaseProduct: (state, action) => {
      const { name } = action.payload;
      const item = state.items.find((item) => item.name === name);
      if (item && item.inStock > 0) {
        item.count += 1;
        item.inStock -= 1;
      }
    },
    decreaseProduct: (state, action) => {
      const { name } = action.payload;
      const item = state.items.find((item) => item.name === name);
      if (item && item.count > 1) {
        item.count -= 1;
        item.inStock += 1;
      }
    },
    removeItemFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.name === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    updateCartItemQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((item) => item.name === name);
      if (item) {
        item.count = quantity;
      }
    },
    updateProductInStock: (state, action) => {
      const { name, updatedInStock } = action.payload;
      const item = state.items.find((item) => item._id === name);
      if (item) {
        item.inStock = updatedInStock;
      }
    },
  },
});

export const {
  addItemToCart,
  increaseProduct,
  decreaseProduct,
  removeItemFromCart,
  updateCartItemQuantity,
  updateProductInStock,
} = cartSlice.actions;

export default cartSlice.reducer;
