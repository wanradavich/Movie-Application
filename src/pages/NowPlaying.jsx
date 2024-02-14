import { useEffect, useState } from "react";
import HomeCategories from "../components/HomeCategories";
import { addToFavorites } from "../actions/favoritesActions";
import { addToWatchlist } from "../actions/watchlistActions";
import { connect } from "react-redux";

const NowPlaying = ({ addToFavorites, addToWatchlist }) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
  const nowPlaying = "https://api.themoviedb.org/3/movie/now_playing";
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${nowPlaying}?api_key=${apiKey}`);
        const data = await response.json();
        const nowPlayingMoviesData = data.results;
        console.log(nowPlayingMoviesData);
        setNowPlayingMovies(nowPlayingMoviesData);
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    fetchData();
  }, []);

  const limitedNowPlaying = nowPlayingMovies.slice(0, 12);

  const handleAddToFavorites = (movie) => {
    addToFavorites(movie);
  };

  const handleAddToWatchlist = (movie) => {
    addToWatchlist(movie);
  };

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
            <div>
              <button onClick={() => handleAddToFavorites(movie)}>
                Add to Favorites
              </button>
              <button onClick={() => handleAddToWatchlist(movie)}>
                Add to Watchlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default connect(null, { addToFavorites, addToWatchlist })(NowPlaying);
// export default NowPlaying;
