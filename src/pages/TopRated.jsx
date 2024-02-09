import { useEffect, useState } from "react";
import HomeCategories from "../components/HomeCategories";
import { addToFavorites } from "../actions/favoritesActions";
import { addToWatchlist } from "../actions/watchlistActions";
import { connect } from "react-redux";

const TopRated = ({ addToFavorites, addToWatchlist }) => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
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
      } catch (error) {
        console.error("Error fetching Top Rated movies: ", error);
      }
    };
    fetchData();
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
      <div className="home-cat">
        <HomeCategories />
      </div>
      <h2 className="header-title">Top Rated Movies</h2>
      <div className="movie-list">
        {limitedTopRated.length > 0 ? (
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
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default connect(null, { addToFavorites, addToWatchlist })(TopRated);

// export default TopRated;
