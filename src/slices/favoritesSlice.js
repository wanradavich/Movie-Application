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
      state.favorites.push(action.payload);
      saveFavorites(state.favorites);
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
