// import {
//   storeWatchlistInLocalStorage,
//   removeFromWatchlistInLocalStorage,
// } from "../utils/localStorageUtils";

export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST";

export const addToWatchlist = (movie) => {
  console.log("Adding to watchlist:", movie);
  //   storeWatchlistInLocalStorage(movie);
  return {
    type: ADD_TO_WATCHLIST,
    payload: movie,
  };
};

export const removeFromWatchlist = (movieId) => {
  //   removeFromWatchlistInLocalStorage(movieId);
  console.log("Removing from watchlist:", movieId);
  return {
    type: REMOVE_FROM_WATCHLIST,
    payload: movieId,
  };
};
