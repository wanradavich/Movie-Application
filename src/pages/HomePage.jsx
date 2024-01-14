import { useEffect } from "react";
import { connect } from "react-redux";
import HomeCategories from "../components/HomeCategories";
import { fetchPopularMoviesSuccess } from "../actions/popularActions";
import AddFave from "../components/AddFave";
import WatchList from "../components/WatchList";

const HomePage = ({ popularMovies, fetchPopularMoviesSuccess }) => {
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
        fetchPopularMoviesSuccess(fetchedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);
  const limitedPopular = popularMovies.slice(0, 12);

  // const addToWatchList = (movie) => {
  //   const watchlistMovies =
  //     JSON.parse(localStorage.getItem("watchlistMovies")) || [];

  //   if (
  //     !watchlistMovies.some((watchlistMovie) => watchlistMovie.id === movie.id)
  //   ) {
  //     watchlistMovies.push(movie);
  //     localStorage.setItem("watchlistMovies", JSON.stringify(watchlistMovies));
  //   }
  // };

  return (
    <>
      <div className="home-cat">
        <HomeCategories />
      </div>
      <h2 className="header-title">Popular Movies</h2>
      <div className="movie-list">
        {limitedPopular.length > 0 ? (
          limitedPopular.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                className="movie-img"
                src={`${baseImageUrl}${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="overlay">
                <div className="overlay-buttons">
                  <AddFave />
                  <WatchList / >
                </div> 
              </div>
              {/* <button
                className="btn btn-warning"
                onClick={() => addToWatchList(movie)}
              >
                Add to Watchlist
              </button> */}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("CHECK STATE", state); // logging entire state check
  return {
    popularMovies: state.popularMovies.popularMovies || [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPopularMoviesSuccess: (movies) =>
    dispatch(fetchPopularMoviesSuccess(movies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
