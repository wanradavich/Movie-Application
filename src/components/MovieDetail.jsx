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
        
      <h2>Movie Details</h2>
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
            <p>{movie.vote_average}/10</p>
        </div>
        <div id="genre">
            <h5>Genre</h5>
            {/* <p>
                {movie.genres.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                ))}
            </p> */}
        </div>
      </div>
      <Link to={`/`}>
        <button>Back to List</button>
      </Link>

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

// //import { Link} from "react-router-dom";
// import { addToFavorites, removeFromFavorites } from "../slices/favoritesSlice";
// import { useDispatch } from "react-redux";

// function MovieDetail () {
//     const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
//     const baseImageUrl = "https://image.tmdb.org/t/p/w500";
//     //const dispatch = useDispatch();

//     // function handleToggleFavorite() {
//     //     if (addToFavorites === true) {
//     //         console.log(movieObj);
//     //         dispatch(addToFavorites(movieObj));
//     //     }
//     //     else {
//     //         dispatch(removeFromFavorites(movieObj));
//     //     }
//     // }

//     return (
//         <div>
//             {isFavourite && (
//                 <div>
//                     <button onClick={handleToggleFavorite}>
//                         heart
//                     </button>
//                     {/* this is where the heart would go for favourite */}
//                 </div>
//             )}
//             <div className="movie-profile-photo">
//                 <img
//                     src={`${baseImageUrl}${movieObj.poster_path}`}
//                     alt={movieObj.title}
//                 />
//             </div>
//             <div className="movie-info">
//                 <h3 id="movie-title">
//                     {movieObj.title}
//                 </h3>
//                 <div id="overview">
//                     <h5>
//                         Overview:
//                     </h5>
//                     <p>
//                         {movieObj.overview}
//                     </p>
//                 </div>
//                 <div id="released">
//                     <h5>
//                         Released:
//                     </h5>
//                     <p>
//                         {movieObj.release_date}
//                     </p>
//                 </div>
//                 <div id="rate">
//                     <h5>
//                         Rating:
//                     </h5>
//                     <p>
//                         {movieObj.vote_average}
//                     </p>
//                 </div>
//                 <div id="genre">
//                     <h5>
//                         Genre:
//                     </h5>
//                     <p>
//                         {movieObj.genres.map((genre) => (
//                             <span key={genre.id}>{genre.name}</span>
//                         ))}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// } 
// // MovieDetail.defaultProps = {
// //     movieLink: true,
// //   };
// export default MovieDetail;