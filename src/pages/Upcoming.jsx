import MovieCategory from "../components/MovieCategory";

const TopRated = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const currentDate = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format

  // Construct the API URL with additional query parameters
  const upcoming = "https://api.themoviedb.org/3/movie/upcoming";
  const upcomingApiUrl = `${upcoming}?api_key=${apiKey}&primary_release_date-gte=${currentDate}&region=US`;

  return <MovieCategory apiUrl={upcomingApiUrl} />;
};

export default TopRated;
