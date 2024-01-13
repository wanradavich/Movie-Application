import { useEffect, useState } from "react";
import HomeCategories from "../components/HomeCategories";
import AddFave from "../components/AddFave";
import WatchList from "../components/WatchList";

function Upcoming() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
  const upcoming = "https://api.themoviedb.org/3/movie/upcoming";
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${upcoming}?api_key=${apiKey}`);
        const data = await response.json();
        const upcomingMovies = data.results;
        console.log(upcomingMovies);
        setUpcomingMovies(upcomingMovies);
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

export default Upcoming;
