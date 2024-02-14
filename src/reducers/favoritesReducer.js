import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../actions/favoritesActions";
// import { getFavoritesFromLocalStorage } from "../utils/localStorage";

const initialState = [];
const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      console.log("Adding to favorites:", action.payload);
      return [...state, action.payload];

    case REMOVE_FROM_FAVORITES:
      console.log("Removing from favorites:", action.payload);
      return state.filter((movie) => movie.id !== action.payload);
    default:
      return state;
  }
};

export default favoritesReducer;
