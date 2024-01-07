import MovieAPI from "../components/MovieAPI";
import { useState } from "react";

function MovieCard() {
  const [movieList, setMovieList] = useState([]);
  const updateMovieList = (list) => {
    setMovieList(list);
  };
  return (
    <>
      <div className="home-container">
        <div className="homecards-container">
          <MovieAPI updateMovieList={updateMovieList} limit={12} />
          {movieList.map((movie) => (
            <div id="img-container" key={movie.id}>
              <img
                id="card-img"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieCard;
