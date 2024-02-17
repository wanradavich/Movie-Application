const favoritesStorage = "appFavorites";

export function getFavorites() {
  let favoritesFromStorage = localStorage.getItem(favoritesStorage);
  if (favoritesFromStorage === null) {
    return [];
  } else {
    return JSON.parse(favoritesFromStorage);
  }
}

export function saveFavorites(favorites) {
  localStorage.setItem(favoritesStorage, JSON.stringify(favorites));
}
