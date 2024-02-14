import { useEffect, useState } from "react";
import HomeCategories from "../components/HomeCategories";
import { addToFavorites } from "../actions/favoritesActions";
import { addToWatchlist } from "../actions/watchlistActions";
import { connect } from "react-redux";
import BigMovieBanner from "../components/BigMovieBanner";

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

  // useEffect(() => {
  //   const fetchVideoForMovie = async (movieId) => {
  //     try {
  //       const response = await fetch(
  //         `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
  //       );
  //       const data = await response.json();
  //       // Extracting the first video (assuming you want only one video)
  //       const firstVideo = data.results[0];
  //       console.log("Video for movie", movieId, firstVideo);
  //       setVideos((prevVideos) => ({
  //         ...prevVideos,
  //         [movieId]: firstVideo,
  //       }));
  //     } catch (error) {
  //       console.error("Error fetching video for movie:", movieId, error);
  //     }
  //   };

  //   if (popularMovies.length > 0) {
  //     fetchVideoForMovie(popularMovies[0].id);
  //   }
  // }, [popularMovies]);

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
            <div className="movie-card" key={movie.id}>
              <div className="movie-img-container">
                <img
                  className="movie-img"
                  src={`${baseImageUrl}${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="fav-watch-btn-container">
                  <button
                    className="fav-watch-button"
                    onClick={() => handleAddToFavorites(movie)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                  </button>
                  <button
                    className="fav-watch-button"
                    onClick={() => handleAddToWatchlist(movie)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                      <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
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
