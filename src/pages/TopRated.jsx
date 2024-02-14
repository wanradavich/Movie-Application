import { useEffect, useState } from "react";
import HomeCategories from "../components/HomeCategories";
import { addToFavorites } from "../actions/favoritesActions";
import { addToWatchlist } from "../actions/watchlistActions";
import { connect } from "react-redux";
import BigMovieBanner from "../components/BigMovieBanner";

const TopRated = ({ addToFavorites, addToWatchlist }) => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstMovie, setFirstMovie] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
  const topRated = "https://api.themoviedb.org/3/movie/top_rated";
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${topRated}?api_key=${apiKey}`);
        const data = await response.json();
        const fetchedMovies = data.results;
        console.log("TR LOG CHECK", fetchedMovies);
        setTopRatedMovies(fetchedMovies);
        setLoading(false);
        if (fetchedMovies.length > 0) {
          setFirstMovie(fetchedMovies[0]); // Set the first movie
        }
      } catch (error) {
        console.error("Error fetching Top Rated movies: ", error);
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

  const limitedTopRated = topRatedMovies.slice(0, 12);

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
          limitedTopRated.map((movie) => (
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

export default connect(null, { addToFavorites, addToWatchlist })(TopRated);

// export default TopRated;
