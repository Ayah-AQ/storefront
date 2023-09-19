import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import myCategoriesReducer from "./Reducers/Categories/index";
import myProductsReducer from "./Reducers/Produts";
import myCartReducer from "./Reducers/CartReducer"

let reducers = combineReducers({
  myCategoriesReducer: myCategoriesReducer,
  myProductsReducer:myProductsReducer,
  cart: myCartReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();