import { connect } from "react-redux";
import { removeFromWatchlist } from "../actions/watchlistActions";
import MovieCard2 from "../components/MovieCard2";

const WatchlistPage = ({ watchlist, removeFromWatchlist }) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  const handleRemoveFromWatchlist = (movieId) => {
    removeFromWatchlist(movieId);
    console.log("Removing from favorites:", movieId);
  };
  return (
    <div>
      <div className="wl-movie-list">
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <MovieCard2
              key={movie.id}
              movie={movie}
              baseImageUrl={baseImageUrl}
              handleRemoveFromFavorites={handleRemoveFromWatchlist}
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
  watchlist: state.watchlist,
});

export default connect(mapStateToProps, { removeFromWatchlist })(WatchlistPage);
