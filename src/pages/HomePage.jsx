import MovieAPI from "../components/MovieAPI";
import { useState } from "react";

function HomePage() {
  const [movieList, setMovieList] = useState([]);
  const updateMovieList = (list) => {
    setMovieList(list);
  };

  return (
    <>
      <MovieAPI updateMovieList={updateMovieList} />
      <h1>HOME TEST</h1>
      {movieList.map((movie) => (
        <img
          key={movie}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      ))}
    </>
  );
}

export default HomePage;
