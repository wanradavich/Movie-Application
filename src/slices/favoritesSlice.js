import { createSlice } from "@reduxjs/toolkit";
import { getFavorites, saveFavorites } from "../utils/localStorage";

const initialFavorites = getFavorites();
const initialState = {
  favorites: initialFavorites,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      // Check if the movie is already in favorites
      const isAlreadyAdded = state.favorites.some(movie => movie.id === action.payload.id);
      if (!isAlreadyAdded) {
        console.log("Movie is not in list, adding to fave: ", action.payload);
        state.favorites.push(action.payload);
        saveFavorites(state.favorites);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload
      );
      saveFavorites(state.favorites);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
