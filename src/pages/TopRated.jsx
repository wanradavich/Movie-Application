import { useEffect } from "react";
import { connect } from "react-redux";
import HomeCategories from "../components/HomeCategories";
import { fetchTopRatedMoviesSuccess } from "../actions/topRatedActions";

const TopRated = ({ topRatedMovies, fetchTopRatedMoviesSuccess }) => {
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
        fetchTopRatedMoviesSuccess(fetchedMovies);
      } catch (error) {
        console.log("Error fetching Top Rated movies: ", error);
      }
    };
    fetchData();
  }, []);
  const limitedTopRated = topRatedMovies.slice(0, 12);

  return (
    <>
      <div className="home-cat">
        <HomeCategories />
      </div>
      <h2 className="header-title">Top Rated Movies</h2>
      <div className="movie-list">
        {limitedTopRated.length > 0 ? (
          limitedTopRated.map((movie) => (
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
    topRatedMovies: state.topRatedMovies.topRatedMovies || [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTopRatedMoviesSuccess: (movies) =>
    dispatch(fetchTopRatedMoviesSuccess(movies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopRated);
