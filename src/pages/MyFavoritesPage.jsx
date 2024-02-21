import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../slices/favoritesSlice";
import MovieCard2 from "../components/MovieCard2";
import NoMovie from "../components/images/no-movies.jpg";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  const handleRemoveFromFavorites = (movieId) => {
    dispatch(removeFromFavorites(movieId));
    console.log("Removing from favorites:", movieId);
  };

  return (
    <div id="favorites">
      <div className={favorites.length > 0 ? "fav-movie-list" : "empty-page"}>
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <MovieCard2
              key={movie.id}
              movie={movie}
              baseImageUrl={baseImageUrl}
              handleRemoveFromFavorites={handleRemoveFromFavorites}
            />
          ))
        ) : (
          <div id="empty-list-container">
            <p className="empty-list">Your Movie List is Empty</p>
            <img
              id="empty-list-img"
              src={ NoMovie}
              alt="empty-list"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
