import HomeCategories from "../components/HomeCategories";
import BigMovieBanner from "../components/BigMovieBanner";
import MovieCard from "../components/MovieCard";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../slices/favoritesSlice";
import { useState, useEffect } from "react";
import LoadSpinner from "./LoadSpinner";

const MovieCategory = ({ apiUrl }) => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstMovie, setFirstMovie] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const fetchedMovies = data.results;
        const sortedFetchedMovies = fetchedMovies
          .slice()
          .sort((a, b) => b.vote_average - a.vote_average);
        setMovies(fetchedMovies);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        if (sortedFetchedMovies.length > 0) {
          setFirstMovie(sortedFetchedMovies[0]); // Sets the first movie as highest vote_average
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

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

  const handleAddToFavorites = (movie) => {
    // Dispatch addToFavorites action using useDispatch
    dispatch(addToFavorites(movie));
    console.log("Adding to favorites:", movie);
  };

  return (
    <>
      {/* Render Spinner while loading */}
      {loading ? (
        <LoadSpinner />
      ) : (
        <>
          {firstMovie && (
            <BigMovieBanner
              src={`https://image.tmdb.org/t/p/w500${firstMovie.poster_path}`}
              alt={firstMovie.title}
              desc={firstMovie.overview}
              movieId={firstMovie.id}
            />
          )}
          <div className={`home-cat ${isSticky ? "fixed-home-cat" : ""}`}>
            <HomeCategories />
          </div>
          <div
            className={`movie-list ${isSticky ? "fixed-nav-transition" : ""}`}
          >
            {loading ? (
              <p>Loading...</p>
            ) : (
              movies
                .slice(0, 12)
                .map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    baseImageUrl={baseImageUrl}
                    handleAddToFavorites={handleAddToFavorites}
                  />
                ))
            )}
          </div>
        </>
      )}
    </>
  );
};

export default MovieCategory;
