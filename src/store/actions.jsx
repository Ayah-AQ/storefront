export const selectedCategory = (category) => {
    return {
      type: "SELECT",
      payload: category,
    };
  };