import { useState, useEffect } from "react";
import AddFave from "../components/AddFave";
import AddWatchList from "../components/AddWatchList";
import { addToWatchList } from "../utilities/addToWatchList";
import { addToFave } from "../utilities/addToFave";

const FaveList = () => {
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  // State to manage favorite movies
  const [faveMovies, setFaveMovies] = useState(
    JSON.parse(localStorage.getItem("faveMovies")) || []
  );

  useEffect(() => {
    // Update the state when local storage changes
    setFaveMovies(JSON.parse(localStorage.getItem("faveMovies")) || []);
  }, []);

  const handleAddToFave = (movie) => {
    addToFave(movie);
    // Manually update the state to trigger re-render
    setFaveMovies(JSON.parse(localStorage.getItem("faveMovies")) || []);
  };


  return (
    <div>
      <h2 className="header-title">My Favorites</h2>
      <div className="movie-list">
        {faveMovies.length > 0 ? (
          faveMovies.map((movie) => (
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
                  <AddFave
                    movie={movie}
                    onClick={() => handleAddToFave(movie)}
                  />
                  <AddWatchList movie={movie} onClick={() => addToWatchList(movie)}/>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Sorry, you have no movies in your favorites.</p>
        )}
      </div>
    </div>
  );
};

export default FaveList;
