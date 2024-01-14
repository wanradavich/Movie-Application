import { useEffect } from "react";
import { connect } from "react-redux";
import HomeCategories from "../components/HomeCategories";
import { fetchUpcomingMoviesSuccess } from "../actions/upcomingActions";
import AddFave from "../components/AddFave";
import WatchList from "../components/WatchList";

const Upcoming = ({ upcomingMovies, fetchUpcomingMoviesSuccess }) => {
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
        fetchUpcomingMoviesSuccess(fetchedMovies);
      } catch (error) {
        console.log("Error fetching Upcoming movies: ", error);
      }
    };

    fetchData();
  }, []);

  const limitedUpcoming = upcomingMovies.slice(0, 12);
  return (
    <>
      <div className="home-cat">
        <HomeCategories />
      </div>
      <h2 className="header-title">Top Rated</h2>
      <div className="movie-list">
        {limitedUpcoming.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
                className="movie-img"
                src={`${baseImageUrl}${movie.poster_path}`}
                alt={movie.title}
              />
            <div className="overlay">
              <div className="overlay-buttons">
                <AddFave />
                <WatchList />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log("UC CHECK STATE: ", state);
  return {
    upcomingMovies: state.upcomingMovies.upcomingMovies || [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUpcomingMoviesSuccess: (movies) =>
    dispatch(fetchUpcomingMoviesSuccess(movies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);
