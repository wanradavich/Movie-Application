import { useEffect, useState } from "react";
import HomeCategories from "../components/HomeCategories";
import { addToFavorites } from "../actions/favoritesActions";
import { addToWatchlist } from "../actions/watchlistActions";
import { connect } from "react-redux";

const HomePage = ({ favorites, addToFavorites, addToWatchlist }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
  const popular = "https://api.themoviedb.org/3/movie/popular";
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${popular}?api_key=${apiKey}`);
        const data = await response.json();
        const fetchedMovies = data.results;
        console.log("LOG CHECK", fetchedMovies);
        setPopularMovies(fetchedMovies);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

  const limitedPopular = popularMovies.slice(0, 12);

  const handleAddToFavorites = (movie) => {
    // Validate movie object
    if (typeof movie !== "object" || !movie.id || !movie.title) {
      console.error("Invalid movie object:", movie);
      return; // Exit early if movie object is invalid
    }

    // Check if the movie is already in favorites
    const isAlreadyInFavorites = favorites.some(
      (favMovie) => favMovie.id === movie.id
    );
    if (isAlreadyInFavorites) {
      console.log("Movie is already in favorites:", movie);
      return; // Exit early if movie is already in favorites
    }

    // Dispatch addToFavorites action
    addToFavorites(movie);
    console.log("Adding to favorites:", movie);
  };

  const handleAddToWatchlist = (movie) => {
    // Validate movie object
    if (typeof movie !== "object" || !movie.id || !movie.title) {
      console.error("Invalid movie object:", movie);
      return; // Exit early if movie object is invalid
    }

    // Dispatch addToWatchlist action
    addToWatchlist(movie);
    console.log("Adding to watchlist:", movie);
  };

  return (
    <>
      <div className="home-cat">
        <HomeCategories />
      </div>
      <h2 className="header-title">Popular Movies</h2>
      <div className="movie-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          limitedPopular.map((movie) => (
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

const mapStateToProps = (state) => ({
  favorites: state.favorites, // Assuming 'favorites' is the key for the favorites state in your Redux store
});

export default connect(mapStateToProps, { addToFavorites, addToWatchlist })(
  HomePage
);
// export default HomePage;
