import * as types from "./Type";


export const selectedCategory = (category) => {
    return {
      type: types.SELECT,
      payload: category,
    };
  };