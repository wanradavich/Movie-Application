import { useEffect } from "react";

function MovieAPI({ updateMovieList }) {
  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=d54e5d8cf2227762d2ed37b16b4ea050"
    )
      .then((res) => res.json())
      .then((json) => updateMovieList(json.results)) // Pass the fetched movie list to the parent component
      .catch((error) => console.error("Error fetching movies:", error));
  };

  useEffect(() => {
    getMovie();
  }, [updateMovieList]);

  return null; // Return null or an empty div, as MovieAPI doesn't render any UI
}

export default MovieAPI;
