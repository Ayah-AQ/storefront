import * as types from "../Actions/Type";

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_ITEM:
      const newItem = {
        name: payload.name,
        price: payload.price,
        description: payload.description,
        category: payload.category,
        image: payload.image,
        count: payload.count,
      };
      return { items: [...state.items, newItem] };

    case types.INCREASE:
      const updatedItems = state.items.map((item) => {
        if (item.name === payload.name) {
          return {
            ...item,
            count: item.count + payload.quantity, // Update the count property.
          };
        }
        return item;
      });
      return { items: updatedItems };

    case types.REMOVE_ITEM:
      return {
        items: state.items.filter((item) => item.name !== payload),
      };

    default:
      return state;
  }
};
