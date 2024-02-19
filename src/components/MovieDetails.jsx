import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState(null);
  const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        const movieData = await movieResponse.json();
        setMovie(movieData);

        const videoResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
        );
        const videoData = await videoResponse.json();
        if (videoData.results.length > 0) {
          setVideo(videoData.results[0]);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="movie-individual">
      <h2>Movie Details</h2>
      <img
        src={`${baseImageUrl}${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "200px", height: "300px" }}
      />
      <p>Title: {movie.title}</p>
      <p>Overview: {movie.overview}</p>

      {video && (
        <div>
          <p>Video:</p>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.key}`}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
