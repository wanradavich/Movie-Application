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
  const [searchQuery, setSearchQuery] = useState("");

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  const baseUrl = "https://api.themoviedb.org/3";
  const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";

  useEffect(() => {
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
  const searchMovies = async (query) => {
    if (!query) {
      // If the search query is empty, fetch all movies
      fetchData();
      return;
    }
    const encodedQuery = encodeURIComponent(query);
    const API_URL = `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${encodedQuery}`;
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error searching movies by title:", error);
      setMovies([]);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    searchMovies(event.target.value); // Trigger search as the user types
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchMovies(searchQuery);
  };

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
              src={`https://image.tmdb.org/t/p/original${firstMovie.poster_path}`}
              alt={firstMovie.title}
              desc={firstMovie.overview}
              movieId={firstMovie.id}
            />
          )}
          <div className={`home-cat ${isSticky ? "fixed-home-cat" : ""}`}>
            <HomeCategories />
            <form onSubmit={handleSearchSubmit}>
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search..."
              />
              <button id="search" type="submit">
                <svg
                  id="search-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </form>
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
