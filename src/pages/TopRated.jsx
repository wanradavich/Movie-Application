import MovieCategory from "../components/MovieCategory";

const TopRated = () => {
  const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
  const topRated = "https://api.themoviedb.org/3/movie/top_rated";

  const topRatedApiUrl = `${topRated}?api_key=${apiKey}`;
  return <MovieCategory apiUrl={topRatedApiUrl} />;
};

export default TopRated;
