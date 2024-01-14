// export const addToFave = (movie) => {
//     const faveMovies =
//       JSON.parse(localStorage.getItem("faveMovies")) || [];
  
//     if (!faveMovies.some((faveMovie) => faveMovie.id === movie.id)) {
//       faveMovies.push(movie);
//       localStorage.setItem("faveMovies", JSON.stringify(faveMovies));
//     }
//   };

///////////////////

export const addToFave = (movie) => {
    const faveMovies =
      JSON.parse(localStorage.getItem("faveMovies")) || [];
  
    const movieIndex = faveMovies.findIndex(
      (faveMovie) => faveMovie.id === movie.id
    );
  
    if (movieIndex !== -1) {
      // If the movie is already in the favorites, remove it
      faveMovies.splice(movieIndex, 1);
    } else {
      // If the movie is not in the favorites, add it
      faveMovies.push(movie);
    }
  
    localStorage.setItem("faveMovies", JSON.stringify(faveMovies));
  };

  
  