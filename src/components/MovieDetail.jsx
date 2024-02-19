//import { Link} from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "../slices/favoritesSlice";
import { useDispatch } from "react-redux";

function MovieDetail ({movieObj, isFavourite, baseImageUrl}) {
    const dispatch = useDispatch();

    function handleToggleFavorite() {
        if (addToFavorites === true) {
            console.log(movieObj);
            dispatch(addToFavorites(movieObj));
        }
        else {
            dispatch(removeFromFavorites(movieObj));
        }
    }

    return (
        <div>
            {isFavourite && (
                <div>
                    <button onClick={handleToggleFavorite}>
                        heart
                    </button>
                    {/* this is where the heart would go for favourite */}
                </div>
            )}
            <div className="movie-profile-photo">
                <img
                    src={`${baseImageUrl}${movieObj.poster_path}`}
                    alt={movieObj.title}
                />
            </div>
            <div className="movie-info">
                <h3 id="movie-title">
                    {movieObj.title}
                </h3>
                <div id="overview">
                    <h5>
                        Overview:
                    </h5>
                    <p>
                        {movieObj.overview}
                    </p>
                </div>
                <div id="released">
                    <h5>
                        Released:
                    </h5>
                    <p>
                        {movieObj.release_date}
                    </p>
                </div>
                <div id="rate">
                    <h5>
                        Rating:
                    </h5>
                    <p>
                        {movieObj.vote_average}
                    </p>
                </div>
                <div id="genre">
                    <h5>
                        Genre:
                    </h5>
                    <p>
                        {movieObj.genres.map((genre) => (
                            <span key={genre.id}>{genre.name}</span>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    )
} 
// MovieDetail.defaultProps = {
//     movieLink: true,
//   };
export default MovieDetail;