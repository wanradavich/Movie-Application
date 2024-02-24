import MovieCategory from "../components/MovieCategory";

const TopRated = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const upcoming = "https://api.themoviedb.org/3/movie/upcoming";

  const upcomingApiUrl = `${upcoming}?api_key=${apiKey}`;
  return <MovieCategory apiUrl={upcomingApiUrl} />;
};

export default TopRated;
