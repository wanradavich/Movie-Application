import CategoryButtons from "../components/CategoryButtons";
import { useState } from "react";
import MovieAPI from "../components/MovieAPI";

function NowPlaying() {
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const updateMovieList = (list) => {
    setNowPlayingList(list);
  };
  return (
    <>
      <CategoryButtons />
      <div className="home-container">
        <div className="homecards-container">
          <MovieAPI
            updateMovieList={updateMovieList}
            limit={12}
            sortBy="vote_count.desc"
          />
          {nowPlayingList.map((movie) => (
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

export default NowPlaying;
