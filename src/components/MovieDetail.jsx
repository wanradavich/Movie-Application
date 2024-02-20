import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      {/* <h2 id="movie-detail-title">Movie Details</h2> */}
      <div>
        <img
          src={`${baseImageUrl}${movie.poster_path}`}
          alt={movie.title}
          style={{ width: "200px", height: "300px" }}
        />
        <div className="movie-details-container">
          <h3>{movie.title}</h3>
          <div id="overview">
              <h5>Overview</h5>
              <p>{movie.overview}</p>
          </div>
          <div id="released">
              <h5>Released</h5>
              <p>{movie.release_date}</p>
          </div>
          <div id="rating">
              <h5>Rating</h5>
              {movie.vote_average !== undefined ? (
                  <p>{movie.vote_average.toFixed(1)}/10</p>
              ) : (
                  <p>N/A</p>
              )}
          </div>
          <div id="genre">
            <h5>Genre</h5>
            <p>
                {movie.genres && movie.genres.map((genre, index) => (
                    <span key={genre.id}>
                        {genre.name}
                        {index !== movie.genres.length - 1 && ", "}
                    </span>
                ))}
            </p>
          </div>
          <Link to={`/`}>
            <button>Back to List</button>
          </Link>
        </div>
      </div>
      {video && (
        <div>
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
