import MovieCategory from "../components/MovieCategory";

const HomePage = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const popular = "https://api.themoviedb.org/3/movie/popular";

  const popularApiUrl = `${popular}?api_key=${apiKey}`;
  return <MovieCategory apiUrl={popularApiUrl} />;
};

export default HomePage;
