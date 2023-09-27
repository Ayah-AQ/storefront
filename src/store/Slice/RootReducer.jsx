import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories';
import cartReducer from './Cart';
import productsReducer from './product';

const storeSlice = configureStore({
  reducer: {
    categories: categoriesReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});

export default storeSlice;
