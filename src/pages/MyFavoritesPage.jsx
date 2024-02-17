import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../slices/favoritesSlice";
import MovieCard2 from "../components/MovieCard2";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  const handleRemoveFromFavorites = (movieId) => {
    dispatch(removeFromFavorites(movieId));
    console.log("Removing from favorites:", movieId);
  };

  return (
    <div>
      <div className="fav-movie-list">
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
          <p className="empty-list">Your Movie List is Empty</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
