
import * as types from "../Actions/Type";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_ITEM:
      const newItem = {
        _id: payload._id,
        name: payload.name,
        category: payload.category,
        inStock: payload.inStock - 1, 
        price: payload.price,
        count: payload.quantity, 
      };
      return { items: [...state.items, newItem] };

    case types.INCREASE:
      const increasedItems = state.items.map((item) => {
        if (item.name === payload.name && item.inStock > 0) {
          return {
            ...item,
            count: item.count + 1,
            inStock: item.inStock - 1, 
          };
        }
        return item;
      });
      return { items: increasedItems };

    case types.DECREASE:
      const decreasedItems = state.items.map((item) => {
        if (item.name === payload.name && item.count > 1) {
          return {
            ...item,
            count: item.count - 1,
            inStock: item.inStock + 1, 
          };
        }
        return item;
      });
      return { items: decreasedItems };

    case types.REMOVE_ITEM:
      const removedItem = state.items.find((item) => item.name === payload);
      if (removedItem) {
        return {
          items: state.items.filter((item) => item.name !== payload),
        };
      }
      return state;

    case types.UPDATE: {
      const { name, quantity } = action.payload;
      return {
        ...state,
        items: state.items.map((item) =>
          item.name === name ? { ...item, quantity } : item
        ),
      };
    }

    case types.UPDATE_PRODUCT_IN_STOCK:
      const updatedItems = state.items.map((item) => {
        if (item._id === action.payload.productId) {
          return {
            ...item,
            inStock: action.payload.updatedInStock,
          };
        }
        return item;
      });

      return {
        ...state,
        items: updatedItems,
      };

    default:
      return state;
  }
};

export default cartReducer;
