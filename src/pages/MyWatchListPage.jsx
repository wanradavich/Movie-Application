import { connect } from "react-redux";
import { removeFromWatchlist } from "../actions/watchlistActions";

const WatchlistPage = ({ watchlist, removeFromWatchlist }) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  const handleRemoveFromWatchlist = (movieId) => {
    removeFromWatchlist(movieId);
    console.log("Removing from favorites:", movieId);
  };
  return (
    <div>
      <h2>My Favorites</h2>
      <div className="movie-list">
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                className="movie-img"
                src={`${baseImageUrl}${movie.poster_path}`}
                alt={movie.title}
              />
              <div>
                <p>{movie.title}</p>
                <button onClick={() => handleRemoveFromWatchlist(movie.id)}>
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
  watchlist: state.watchlist,
});

export default connect(mapStateToProps, { removeFromWatchlist })(WatchlistPage);
