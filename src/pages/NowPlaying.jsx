import { useEffect } from "react";
import { connect } from "react-redux";
import HomeCategories from "../components/HomeCategories";
import { fetchNowPlayingMoviesSuccess } from "../actions/nowPlayingActions";
import AddFave from "../components/AddFave";
import AddWatchList from "../components/AddWatchList";
import { addToWatchList } from "../utilities/addToWatchList";

const NowPlaying = ({ nowPlayingMovies, fetchNowPlayingMoviesSuccess }) => {
  const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
  const nowPlaying = "https://api.themoviedb.org/3/movie/now_playing";
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${nowPlaying}?api_key=${apiKey}`);
        const data = await response.json();
        const nowPlayingMovies = data.results;
        console.log(nowPlaying);
        fetchNowPlayingMoviesSuccess(nowPlayingMovies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const limitedNowPlaying = nowPlayingMovies.slice(0, 12);
  return (
    <>
      <div className="home-cat">
        <HomeCategories />
      </div>
      <h2 className="header-title">Now Playing</h2>
      <div className="movie-list">
        {limitedNowPlaying.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              className="movie-img"
              src={`${baseImageUrl}${movie.poster_path}`}
              alt={movie.title}
            />
          <div className="overlay">
              <div className="overlay-buttons">
                <AddFave />
                <AddWatchList movie={movie} onClick={() => addToWatchList(movie)}/>
              </div> 
          </div>
          </div>
        ))}
      </div>
    </>
  );
}
          
const mapStateToProps = (state) => {
  console.log("NP CHECK STATE", state);
  return {
    nowPlayingMovies: state.nowPlayingMovies.nowPlayingMovies || [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchNowPlayingMoviesSuccess: (movies) =>
    dispatch(fetchNowPlayingMoviesSuccess(movies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
