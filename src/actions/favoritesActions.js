// import {
//   storeFavoritesInLocalStorage,
//   removeFromFavoritesInLocalStorage,
// } from "../utils/localStorageUtils";

export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const addToFavorites = (movie) => {
  console.log("Adding to favorites:", movie);
  //   storeFavoritesInLocalStorage(movie);
  return {
    type: "ADD_TO_FAVORITES",
    payload: movie,
  };
};

export const removeFromFavorites = (movieId) => {
  console.log("Removing from favorites:", movieId);
  //   removeFromFavoritesInLocalStorage(movieId);
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: movieId,
  };
};
