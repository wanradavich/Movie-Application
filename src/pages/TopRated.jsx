import { useEffect, useState } from "react";
import HomeCategories from "../components/HomeCategories";

function TopRated() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
  const topRated = "https://api.themoviedb.org/3/movie/top_rated";
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${topRated}?api_key=${apiKey}`);
        const data = await response.json();
        const topRatedMovies = data.results;
        console.log(topRatedMovies);
        setTopRatedMovies(topRatedMovies);
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
      <h2 className="header-title">Top Rated</h2>
      <div className="movie-list">
        {limitedTopRated.map((movie) => (
          <img
            key={movie.id}
            className="movie-img"
            src={`${baseImageUrl}${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </>
  );
}

export default TopRated;
