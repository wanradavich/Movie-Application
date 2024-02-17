import MovieCategory from "../components/MovieCategory";

const nowPlaying = () => {
  const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
  const nowPlaying = "https://api.themoviedb.org/3/movie/now_playing";

  const nowPlayingApiUrl = `${nowPlaying}?api_key=${apiKey}`;
  return <MovieCategory apiUrl={nowPlayingApiUrl} />;
};

export default nowPlaying;
