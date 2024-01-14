// export const addToWatchList = (movie) => {
//     const watchlistMovies =
//       JSON.parse(localStorage.getItem("watchlistMovies")) || [];
  
//     if (!watchlistMovies.some((watchlistMovie) => watchlistMovie.id === movie.id)) {
//       watchlistMovies.push(movie);
//       localStorage.setItem("watchlistMovies", JSON.stringify(watchlistMovies));
//     }
//   };
  


export const addToWatchList = (movie) => {
    const watchlistMovies =
      JSON.parse(localStorage.getItem("watchlistMovies")) || [];
  
    const movieIndex = watchlistMovies.findIndex(
      (watchlistMovie) => watchlistMovie.id === movie.id
    );
  
    if (movieIndex !== -1) {
      // If the movie is already in the watchlist, remove it
      watchlistMovies.splice(movieIndex, 1);
    } else {
      // If the movie is not in the watchlist, add it
      watchlistMovies.push(movie);
    }
  
    localStorage.setItem("watchlistMovies", JSON.stringify(watchlistMovies));
  };
  