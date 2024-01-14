const WatchList = () => {
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  const watchListMovies =
    JSON.parse(localStorage.getItem("watchlistMovies")) || [];
  return (
    <div>
      <h2 className="header-title">My Watch List</h2>
      <div className="movie-list">
      {watchListMovies.length > 0 ? (
        watchListMovies.map((movie) => (
          <div className="movie-card" key={movie.id}>
              <img
              className="movie-img"
                src={
                  movie.poster_path
                    ? `${baseImageUrl}${movie.poster_path}`
                    : "No Image Provided by API"
                }
                alt={movie.title}
              />
              {/* <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>
              <p>Rating: {movie.vote_average}%</p>
              <p>{movie.overview}</p> */}
            </div>
          ))
        ) : (
          <p>Sorry, you have no movies in your watchlist.</p>
        )}
      </div>
      </div>
    );
  };

export default WatchList;
