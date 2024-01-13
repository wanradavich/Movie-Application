import { useEffect, useState } from "react";
import HomeCategories from "../components/HomeCategories";
import AddFave from "../components/AddFave";
import WatchList from "../components/WatchList";

function NowPlaying() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
  const nowPlaying = "https://api.themoviedb.org/3/movie/now_playing";
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${nowPlaying}?api_key=${apiKey}`);
        const data = await response.json();
        const nowPlayingMovies = data.results;
        console.log(nowPlaying);
        setNowPlayingMovies(nowPlayingMovies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const limitedNowPlaying = nowPlayingMovies.slice(0, 12);
  return (
    <>
      <div className="home-cat">
        <HomeCategories />
      </div>
      <h2 className="header-title">Now Playing</h2>
      <div className="movie-list">
        {limitedNowPlaying.map((movie) => (
          <div className="movie-card" key={movie.id}>
          <img
            className="movie-img"
            src={`${baseImageUrl}${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="overlay">
            <div className="overlay-buttons">
              <AddFave />
              <WatchList />
            </div> 
          </div>
        </div>
      ))}
    </div>
  </>
);
}

export default NowPlaying;
