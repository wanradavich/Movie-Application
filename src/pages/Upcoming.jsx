import MovieCategory from "../components/MovieCategory";

const TopRated = () => {
  const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
  const upcoming = "https://api.themoviedb.org/3/movie/upcoming";

  const upcomingApiUrl = `${upcoming}?api_key=${apiKey}`;
  return <MovieCategory apiUrl={upcomingApiUrl} />;
};

export default TopRated;
