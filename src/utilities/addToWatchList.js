export const addToWatchList = (movie) => {
    const watchlistMovies =
      JSON.parse(localStorage.getItem("watchlistMovies")) || [];
  
    if (!watchlistMovies.some((watchlistMovie) => watchlistMovie.id === movie.id)) {
      watchlistMovies.push(movie);
      localStorage.setItem("watchlistMovies", JSON.stringify(watchlistMovies));
    }
  };
  