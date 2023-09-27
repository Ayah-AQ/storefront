import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; 
import rootReducer from "./Reducers/RootReducer"; 
// import rootReducer from "./Slice/RootReducer"; 

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
