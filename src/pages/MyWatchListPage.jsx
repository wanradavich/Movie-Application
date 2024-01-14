import { useState, useEffect } from "react";
import AddFave from "../components/AddFave";
import AddWatchList from "../components/AddWatchList";
import { addToWatchList } from "../utilities/addToWatchList";
import { addToFave } from "../utilities/addToFave";

const WatchList = () => {
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  // State to manage watchlist movies
  const [watchList, setWatchList] = useState(
    JSON.parse(localStorage.getItem("watchlistMovies")) || []
  );

  useEffect(() => {
    // Update the state when local storage changes
    setWatchList(JSON.parse(localStorage.getItem("watchlistMovies")) || []);
  }, []);

  const handleAddToWatchList = (movie) => {
    addToWatchList(movie);
    // Manually update the state to trigger re-render
    setWatchList(JSON.parse(localStorage.getItem("watchlistMovies")) || []);
  };


  return (
    <div>
      <h2 className="header-title">My WatchList</h2>
      <div className="movie-list">
        {watchList.length > 0 ? (
          watchList.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                className="movie-img"
                src={
                  movie.poster_path
                    ? `${baseImageUrl}${movie.poster_path}`
                    : "No Image Provided by API"
                }
                alt={movie.title}
              />
              <div className="overlay">
                <div className="overlay-buttons">
                  <AddFave movie={movie} onClick={() => addToFave(movie)}/>
                  <AddWatchList
                    movie={movie}
                    onClick={() => handleAddToWatchList(movie)}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Sorry, you have no movies in your watchlist.</p>
        )}
      </div>
    </div>
  );
};

export default WatchList;
