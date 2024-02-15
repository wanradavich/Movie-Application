import { connect } from "react-redux";
import { removeFromFavorites } from "../actions/favoritesActions";
import MovieCard2 from "../components/MovieCard2";

const FavoritesPage = ({ favorites, removeFromFavorites }) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  const handleRemoveFromFavorites = (movieId) => {
    removeFromFavorites(movieId);
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

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps, { removeFromFavorites })(FavoritesPage);
