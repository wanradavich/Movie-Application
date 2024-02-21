import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../slices/favoritesSlice";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState(null);
  const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some((favorite) => favorite.id === movie.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

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
      <div id="movie-details">
        <div id="poster-container">
          <img
            src={
              movie.poster_path
                ? `${baseImageUrl}${movie.poster_path}`
                : "../../public/images/camera.jpg"
            }
            alt={movie.title}
            // style={{ width: "200px", height: "300px" }}
            id="poster-img"
          />
          <div id="detail-heart-container">
            <button className="fav-watch-button" onClick={handleToggleFavorite}>
              <svg
                className="heartIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill={isFavorite ? "red" : "white"}
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015m6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343M7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="movie-details-container">
          <h3 id="movie-title">{movie.title}</h3>
          <div id="overview">
            {/* <h5>Overview</h5> */}
            <p>{movie.overview}</p>
          </div>
          <div id="movie-tags-container">
            <div id="released">
              <h5 className="detail-headings">RELEASED</h5>
              <p className="detail-content">{movie.release_date}</p>
            </div>
            <div id="rating">
              <h5 className="detail-headings">RATING</h5>
              {movie.vote_average !== undefined ? (
                <p className="detail-content">
                  {movie.vote_average.toFixed(1)}/10
                </p>
              ) : (
                <p>N/A</p>
              )}
            </div>
            <div id="genre">
              <h5 className="detail-headings">GENRE</h5>
              <p className="detail-content">
                {movie.genres &&
                  movie.genres.map((genre, index) => (
                    <span key={genre.id}>
                      {genre.name}
                      {index !== movie.genres.length - 1 && ", "}
                    </span>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </div>
      {video && (
        <div id="trailor-container">
          <iframe
            // width="560"
            // height="315"
            src={`https://www.youtube.com/embed/${video.key}?rel=0`}
            id="trailor"
          ></iframe>
        </div>
      )}
      <Link to={`/`}>
        <button id="back-to-list">Back to List</button>
      </Link>
    </div>
  );
};

export default MovieDetails;
