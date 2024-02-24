import MovieCategory from "../components/MovieCategory";

const TopRated = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const topRated = "https://api.themoviedb.org/3/movie/top_rated";

  const topRatedApiUrl = `${topRated}?api_key=${apiKey}`;
  return <MovieCategory apiUrl={topRatedApiUrl} />;
};

export default TopRated;
