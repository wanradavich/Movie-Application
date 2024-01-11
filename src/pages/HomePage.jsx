import { useEffect, useState } from "react";
import HomeCategories from "../components/HomeCategories";

function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);

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

  return (
    <>
      <HomeCategories className="home-cat" />
      <h2>Popular Movies</h2>
      <div className="movie-list">
        {popularMovies.map((movie) => (
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

export default HomePage;
