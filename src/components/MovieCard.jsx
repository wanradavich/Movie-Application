
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../slices/favoritesSlice";

const MovieCard = ({ movie, baseImageUrl }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some((favorite) => favorite.id === movie.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <div className={`movie-card ${isFavorite ? 'favorite' : ''}`} key={movie.id}>
      <div className="movie-img-container">
        <img
          className="movie-img"
          src={`${baseImageUrl}${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="fav-watch-btn-container">
          <button className="fav-watch-button" onClick={handleToggleFavorite}>
            <svg
              className="heartIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill={isFavorite ? "red" : "white"}
              viewBox="0 0 16 16"
            >
              <path
                    fillRule="evenodd"
                    d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015m6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343M7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358"
                />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
