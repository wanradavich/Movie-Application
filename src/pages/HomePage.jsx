import { useEffect, useState } from "react";
import HomeCategories from "../components/HomeCategories";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddFave from "../components/AddFave";
import WatchList from "../components/WatchList";
import { connect } from 'react-redux';
import { addMovieToFavorites, removeMovieFromFavorites } from './actions';



function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [faveList, setFaveList] = useState([]);
  

  const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
  const popular = "https://api.themoviedb.org/3/movie/popular";
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${popular}?api_key=${apiKey}`);
        const data = await response.json();
        const popularMovies = data.results;
        console.log(popularMovies);
        setPopularMovies(popularMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchData();
  }, []);

  const handleFaveClick = (movie, isFaved) => {
    // Add or remove the movie from the favorite list based on the favorite status
    const updatedFaveList = isFaved
      ? faveList.filter((m) => m.id !== movie.id)
      : [...faveList, movie];
    setFaveList(updatedFaveList);
  };

  return (
    <>
      <div className="home-cat">
        <HomeCategories />
      </div>
      <h2 className="header-title">Popular Movies</h2>
      <div className="movie-list">
        {popularMovies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              className="movie-img"
              src={`${baseImageUrl}${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="overlay">
              <div className="overlay-buttons">
                <AddFave movie={movie} onFaveClick={handleFaveClick} />
                <WatchList />
              </div> 
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  popularMovies: state.popularMovies,
  faveList: state.faveList,
});

const mapDispatchToProps = (dispatch) => ({
  onFaveClick: (movie, isFaved) => {
    if (isFaved) {
      dispatch(addMovieToFavorites(movie));
    } else {
      dispatch(removeMovieFromFavorites(movie.id));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

// export default HomePage;
