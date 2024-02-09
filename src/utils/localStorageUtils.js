import { addToFavorites } from "../actions/favoritesActions";
import { addToWatchlist } from "../actions/watchlistActions";

// Function to store favorites in local storage
export const storeFavoritesInLocalStorage = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

// Function to store watchlist in local storage
export const storeWatchlistInLocalStorage = (watchlist) => {
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
};

// Function to get favorites in local storage
export const getFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

// Function to get watchlist in local storage
export const getWatchlistFromLocalStorage = () => {
  const watchlist = localStorage.getItem("watchlist");
  return watchlist ? JSON.parse(watchlist) : [];
};

// Function to remove a movie from favorites in local storage
export const removeFromFavoritesInLocalStorage = (movieId) => {
  let favorites = getFavoritesFromLocalStorage();
  favorites = favorites.filter((movie) => movie.id !== movieId);
  storeFavoritesInLocalStorage(favorites);
};

// Function to remove a movie from watchlist in local storage
export const removeFromWatchlistInLocalStorage = (movieId) => {
  let watchlist = getWatchlistFromLocalStorage();
  watchlist = watchlist.filter((movie) => movie.id !== movieId);
  storeWatchlistInLocalStorage(watchlist);
};

export const initializeStateFromLocalStorage = () => {
  const favorites = getFavoritesFromLocalStorage();
  const watchlist = getWatchlistFromLocalStorage();

  // Dispatch actions to update Redux state with data from local storage
  favorites.forEach((movie) => addToFavorites(movie));
  watchlist.forEach((movie) => addToWatchlist(movie));
};
