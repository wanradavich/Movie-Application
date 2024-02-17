import MovieCategory from "../components/MovieCategory";

const HomePage = () => {
  const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
  const popular = "https://api.themoviedb.org/3/movie/popular";

  const popularApiUrl = `${popular}?api_key=${apiKey}`;
  return <MovieCategory apiUrl={popularApiUrl} />;
};

export default HomePage;
