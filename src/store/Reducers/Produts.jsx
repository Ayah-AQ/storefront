import * as types from "../Actions/Type";


// const initialState = {
//   products: [
//     {
//       name: "Naruto",
//       price: 30.00,
//       description: "A complete set of the beloved Naruto manga series, following the journey of a young ninja.",
//       category: "Manga",
//       image: "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
//       count: 0,
//     },
//     {
//       name: "One Piece",
//       price: 50.00,
//       description: "A collector's box containing multiple volumes of the adventurous One Piece manga.",
//       category: "Manga",
//       image: "https://i.guim.co.uk/img/media/0e40e007341efc99d6ce15e80f74f3a1f92b427c/0_55_1280_768/master/1280.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=63afd9045b1c450b03511748e2a38719",
//       count: 0,
//     },
//     {
//       name: "Attack on Titan",
//       price: 60.00,
//       description: "A dynamic poster featuring iconic characters and titans from the popular series.",
//       category: "Manga",
//       image: "https://cdn2.penguin.com.au/covers/original/9781632366559.jpg",
//       count: 0,
//     },
//     {
//       name: "My Hero Academia",
//       price: 30.00,
//       description: "Keychains showcasing characters from the My Hero Academia manga, perfect for fans.",
//       category: "Manga",
//       image: "https://m.media-amazon.com/images/I/91q7hW6t6ZL._AC_UF1000,1000_QL80_.jpg",
//       count: 0,
//     },
//     {
//       name: "Death Note",
//       price: 55.00,
//       description: "A stylish tote bag adorned with imagery from the thrilling Death Note manga.",
//       category: "Manga",
//       image: "https://i.ebayimg.com/images/g/-9AAAOSwdFRjmLDA/s-l1600.jpg",
//       count: 0,
//     },
//     {
//       name: "Fullmetal Alchemist",
//       price: 25.00,
//       description: "A coffee mug adorned with alchemical symbols and characters from Fullmetal Alchemist.",
//       category: "Manga",
//       image: "https://static.mercdn.net/item/detail/orig/photos/m89983377495_1.jpg",
//     },
//     {
//       name: "Dragon Ball Z",
//       price: 90.00,
//       description: "Detailed action figures of Dragon Ball Z characters, ideal for collectors and fans.",
//       category: "Anime Figures",
//       image: "https://images.squarespace-cdn.com/content/v1/55ef0e29e4b099e22cdc9eea/c553eb7d-8eb1-41c1-b0b3-667235acaa6e/DragonStars-Standing.jpg",
//       count: 0,
//     },
//     {
//       name: "Sailor Moon",
//       price: 75.00,
//       description: "A set of beautifully crafted figurines featuring the Sailor Scouts from the classic anime.",
//       category: "Anime Figures",
//       image: "https://image.made-in-china.com/2f0j00EaZkhzTRTgWc/5PCS-Set-Sailor-Moon-Collect-Statue-Toy-Anime-Figure.webp",
//       count: 0,
//     },
//     {
//       name: "Neon Genesis Evangelion",
//       price: 39.99,
//       description: "Nendoroid figures of Eva pilots and mechs from the iconic Neon Genesis Evangelion series.",
//       category: "Anime Figures",
//       image: "https://img.joomcdn.net/9e0d9db22659f83b18a8479cc72e2529f450c322_original.jpeg",
//       count: 0,
//     },
//     {
//       name: "Pokemon",
//       price: 10,
//       description: "A soft and cuddly Pikachu plush, a must-have for Pokemon enthusiasts.",
//       category: "Anime Figures",
//       image: "https://gd.image-gmkt.com/li/729/808/704808729.g_520-w-st_g.jpg",
//       count: 0,
//     },
//     {
//       name: "Studio Ghibli",
//       price: 15,
//       description: "A charming vinyl figure of Totoro, the lovable character from Studio Ghibli's My Neighbor Totoro",
//       category: "Anime Figures",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kG8Dh0ysn3eEr9u3zpZGgo52ZrFNiAQd39VlIPx0ksPcmcBlKjo7rcocBxWNPJE6BFM&usqp=CAU",
//       count: 0,
//     },
//     {
//       name: "Death Note",
//       price: 10,
//       description: "Death Note Cover Poster (61x91) ",
//       category: "Posters & Wall Scrolls",
//       image: "https://www.otakustore.gr/files/products/24303-1b.jpg",
//     },
//     {
//       name: "Death Note",
//       price: 10,
//       description: "Death Note Cover Poster (61x91)",
//       category: "Posters & Wall Scrolls",
//       image: "https://i.pinimg.com/1200x/f6/ab/8e/f6ab8ebe4ea93a0367f47ea5edcf09d4.jpg",
//       count: 0,
//     },
//     {
//       name: "Demon Slayer",
//       price: 12,
//       description: "each character are alone  Cover Poster (45x91)",
//       category: "Posters & Wall Scrolls",
//       image: "https://i.pinimg.com/1200x/fd/70/be/fd70be195aba4d7109f049acf0b9df13.jpg",
//       count: 0,
//     },
//     {
//       name: "Attack on Titan",
//       price: 10,
//       description: "Wall Scroll ",
//       category: "Wall Scrolls (61x91)",
//       image: "https://i.pinimg.com/1200x/30/a0/a3/30a0a323a4920d0cbbe981d9029c9926.jpg",
//       count: 0,
//     },
//     {
//       name: "hunter x hunter",
//       price: 9,
//       description: " Cover Poster (21x29.7)",
//       category: "Posters & Wall Scrolls",
//       image: "https://i.ebayimg.com/images/g/4OoAAOSwnHZYeM~b/s-l1600.jpg",
//       count: 0,
//     },

//   ],
// };
const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload.results,
      };

    default:
      return state;
  }
};

export default productsReducer;
