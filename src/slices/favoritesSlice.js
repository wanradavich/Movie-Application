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
      const movieToAdd = action.payload;
      const isAlreadyAdded = state.favorites.some(
        (movie) => movie.id === movieToAdd.id
      );
      if (!isAlreadyAdded) {
        state.favorites.push(movieToAdd);
        saveFavorites(state.favorites);
      }
    },
    removeFromFavorites: (state, action) => {
      const movieIdToRemove = action.payload;
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== movieIdToRemove
      );
      saveFavorites(state.favorites);
      console.log(state.favorites);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
