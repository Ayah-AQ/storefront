import { combineReducers } from "redux";
import categoriesReducer from "./Categories/index";
import productsReducer from "./Produts";
import cartReducer from "./CartReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
