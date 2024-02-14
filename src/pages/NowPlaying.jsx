import { useEffect, useState } from "react";
import HomeCategories from "../components/HomeCategories";
import { addToFavorites } from "../actions/favoritesActions";
import { addToWatchlist } from "../actions/watchlistActions";
import { connect } from "react-redux";
import BigMovieBanner from "../components/BigMovieBanner";

const NowPlaying = ({ addToFavorites, addToWatchlist }) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstMovie, setFirstMovie] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

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
        setLoading(false);
        if (nowPlayingMoviesData.length > 0) {
          setFirstMovie(nowPlayingMoviesData[0]); // Set the first movie
        }
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    fetchData();
  }, []);

  //for home category nav transition
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 340);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      {firstMovie && ( // Render only if firstMovie is available
        <BigMovieBanner
          src={`${baseImageUrl}${firstMovie.poster_path}`}
          alt={firstMovie.title}
          desc={firstMovie.overview}
        />
      )}
      <div className={`home-cat ${isSticky ? "fixed-home-cat" : ""}`}>
        <HomeCategories />
      </div>
      <div className={`movie-list ${isSticky ? "fixed-nav-transition" : ""}`}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          limitedNowPlaying.map((movie) => (
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
          ))
        )}
      </div>
    </>
  );
};

export default connect(null, { addToFavorites, addToWatchlist })(NowPlaying);
// export default NowPlaying;
