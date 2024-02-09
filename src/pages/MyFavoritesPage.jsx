import { connect } from "react-redux";
import { removeFromFavorites } from "../actions/favoritesActions";

const FavoritesPage = ({ favorites, removeFromFavorites }) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  const handleRemoveFromFavorites = (movieId) => {
    removeFromFavorites(movieId);
    console.log("Removing from favorites:", movieId);
  };

  return (
    <div>
      <h2>My Favorites</h2>
      <div className="movie-list">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                className="movie-img"
                src={`${baseImageUrl}${movie.poster_path}`}
                alt={movie.title}
              />
              <div>
                <p>{movie.title}</p>
                <button onClick={() => handleRemoveFromFavorites(movie.id)}>
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No favorite movies</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps, { removeFromFavorites })(FavoritesPage);
