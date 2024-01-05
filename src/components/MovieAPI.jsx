// import React, { useEffect } from "react";
import { useEffect } from "react";

function MovieAPI() {
  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=d54e5d8cf2227762d2ed37b16b4ea050"
    )
      .then((res) => res.json())
      .then((json) => console.log(json.results));
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {/* {movieList.map((movie) => (
        <img
          key={1}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      ))} */}
    </div>
  );
}

export default MovieAPI;
