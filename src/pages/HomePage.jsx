import { useEffect } from "react";
import { connect } from "react-redux";
import HomeCategories from "../components/HomeCategories";
import { fetchPopularMoviesSuccess } from "../actions/popularActions";
import AddFave from "../components/AddFave";
import AddWatchList from "../components/AddWatchList";
import { addToWatchList } from "../utilities/addToWatchList";
import { addToFave } from "../utilities/addToFave"; 

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
                  <AddFave movie={movie} onClick={() => addToFave(movie)} />
                  <AddWatchList movie={movie} onClick={() => addToWatchList(movie)}/>
                </div> 
              </div>
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
