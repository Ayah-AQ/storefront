import * as types from "./Type";
import axios from "axios";

// Categories
export const setSelectedCategory = (category) => ({
  type: types.SET_SELECTED_CATEGORY,
  payload: category,
});
export const fetchCategories = () => {
  return async (dispatch) => {
  try {
  const response = await axios.get(
    "https://api-js401.herokuapp.com/api/v1/categories"
  );
  console.log("CATTTEE",response.data)
  if (response.status === 200) {
    dispatch({
      type: types.FETCH_CATEGORIES_SUCCESS,
      payload: response.data,
    });
  } else {
   
    console.error("Error fetching categories: ", response.statusText);
  }
} catch (error) {
 
  console.error("Error fetching categories:", error);
}
  };
};
// Products
export const fetchProducts = (category) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api-js401.herokuapp.com/api/v1/products`
      );
          console.log("PRODDDDDDD",response.data)
      if (response.status === 200) {
        dispatch({
          type: types.FETCH_PRODUCTS_SUCCESS,
          payload: response.data,
        });
      } else {
       
      }
    } catch (error) {
     
      console.error("Error fetching products:", error);
    }
  };
};

