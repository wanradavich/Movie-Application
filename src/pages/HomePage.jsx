import { useEffect, useState } from "react";
import HomeCategories from "../components/HomeCategories";
import { addToFavorites } from "../actions/favoritesActions";
import { addToWatchlist } from "../actions/watchlistActions";
import { connect } from "react-redux";
import BigMovieBanner from "../components/BigMovieBanner";
import MovieCard from "../components/MovieCard";

const HomePage = ({ favorites, addToFavorites, addToWatchlist }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstMovie, setFirstMovie] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
  const popular = "https://api.themoviedb.org/3/movie/popular";
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${popular}?api_key=${apiKey}`);
        const data = await response.json();
        const fetchedMovies = data.results;
        setPopularMovies(fetchedMovies);
        setLoading(false);

        if (fetchedMovies.length > 0) {
          setFirstMovie(fetchedMovies[0]); // Set the first movie
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
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
          limitedPopular.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              baseImageUrl={baseImageUrl}
              handleAddToFavorites={handleAddToFavorites}
              handleAddToWatchlist={handleAddToWatchlist}
            />
          ))
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps, { addToFavorites, addToWatchlist })(
  HomePage
);
