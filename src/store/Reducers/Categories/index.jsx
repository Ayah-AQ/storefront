import * as types from "../../Actions/Type";

const initialState = {
  categories: [],
  selectedCategory: "",
};

// const initialState = {
//   category: [
//     {
//       name: "Manga",
//       displayName: "MANGA",
//       description:
//         " style of Japanese comic books and graphic novels known for its distinctive art and storytelling, often featuring diverse genres and captivating characters.",
//       image: "https://s.hdnux.com/photos/01/33/47/36/24016783/7/1200x0.jpg",
//     },
//     {
//       name: "Anime Figures",
//       displayName: "ANIME FIGURES",
//       description:
//         "meticulously crafted collectible sculptures that faithfully depict characters from Japanese anime and manga.",
//       image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71+Ohg03kcL._AC_SL1500_.jpg",
//     },
//     {
//       name: "Posters & Wall Scrolls",
//       displayName: "POSTERS & WALL SCROLLS",
//       description: 
//       "decorative items used to adorn walls, featuring a wide range of designs, from art and movie posters to intricate scrolls, providing a personalized touch to any living space.",
//       image: "https://i.etsystatic.com/36392223/r/il/fdc4f6/4043624186/il_570xN.4043624186_rejh.jpg",
//     },
//   ],
//   active: "",
// };



const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_CATEGORIES_SUCCESS:
      const categoriesArray = payload.results;

      return {
        ...state,
        categories: categoriesArray,
      };

    case types.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
