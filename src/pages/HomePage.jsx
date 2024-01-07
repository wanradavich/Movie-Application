import CategoryButtons from "../components/CategoryButtons";
// import MovieCard from "../components/MovieCard";
import MovieAPI from "../components/MovieAPI";
import { useState } from "react";

function HomePage() {
  const [movieList, setMovieList] = useState([]);

  const updateMovieList = (list) => {
    setMovieList(list);
  };
  return (
    <>
      <CategoryButtons />
      <div className="home-container">
        <div className="homecards-container">
          <MovieAPI updateMovieList={updateMovieList} />
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

export default HomePage;
