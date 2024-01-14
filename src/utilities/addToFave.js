export const addToFave = (movie) => {
    const faveMovies =
      JSON.parse(localStorage.getItem("faveMovies")) || [];
  
    if (!faveMovies.some((faveMovie) => faveMovie.id === movie.id)) {
      faveMovies.push(movie);
      localStorage.setItem("faveMovies", JSON.stringify(faveMovies));
    }
  };