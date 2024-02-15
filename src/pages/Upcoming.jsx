import { useEffect, useState } from "react";
import HomeCategories from "../components/HomeCategories";
import { addToFavorites } from "../actions/favoritesActions";
import { addToWatchlist } from "../actions/watchlistActions";
import { connect } from "react-redux";
import BigMovieBanner from "../components/BigMovieBanner";
import MovieCard from "../components/MovieCard";

const Upcoming = ({ addToFavorites, addToWatchlist }) => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstMovie, setFirstMovie] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
  const upcoming = "https://api.themoviedb.org/3/movie/upcoming";
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${upcoming}?api_key=${apiKey}`);
        const data = await response.json();
        const fetchedMovies = data.results;
        console.log("UC LOG CHECK: ", fetchedMovies);
        setUpcomingMovies(fetchedMovies);
        setLoading(false);
        if (fetchedMovies.length > 0) {
          setFirstMovie(fetchedMovies[0]); // Set the first movie
        }
      } catch (error) {
        console.error("Error fetching Upcoming movies: ", error);
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

  const limitedUpcoming = upcomingMovies.slice(0, 12);

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
          limitedUpcoming.map((movie) => (
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

export default connect(null, { addToFavorites, addToWatchlist })(Upcoming);
// export default Upcoming;
