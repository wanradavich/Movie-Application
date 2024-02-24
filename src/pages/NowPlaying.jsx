import MovieCategory from "../components/MovieCategory";

const nowPlaying = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const nowPlaying = "https://api.themoviedb.org/3/movie/now_playing";

  const nowPlayingApiUrl = `${nowPlaying}?api_key=${apiKey}`;
  return <MovieCategory apiUrl={nowPlayingApiUrl} />;
};

export default nowPlaying;
