import { useEffect } from "react";
import { connect } from "react-redux";
import HomeCategories from "../components/HomeCategories";
import { fetchPopularMoviesSuccess } from "../actions/popularActions";

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

  return (
    <>
      <div className="home-cat">
        <HomeCategories />
      </div>
      <h2 className="header-title">Popular Movies</h2>
      <div className="movie-list">
        {popularMovies.length > 0 ? (
          popularMovies.map((movie) => (
            <img
              key={movie.id}
              className="movie-img"
              src={`${baseImageUrl}${movie.poster_path}`}
              alt={movie.title}
            />
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
    popularMovies: state.popular?.popularMovies || [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPopularMoviesSuccess: (movies) =>
    dispatch(fetchPopularMoviesSuccess(movies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
