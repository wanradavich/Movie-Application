// Indivudal movie page component

import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import isFavourite from "../utils/isFavourite";
import MovieDetail from "../components/MovieDetail";
import movieList from "../utils/movieList";

function IndividualMoviePage() {
    const favourite = useSelector((state) => state.favourites.items);
    const { id } = useParams();
    const baseImageUrl = "https://image.tmdb.org/t/p/w500";

    const movieObj = movieList.find(
        (movie) => String(movie.id) === id
        );
    useEffect(() => {
        if (!movieObj) {
            document.title = `Movie Profile`;
        } else {
            document.title = `Movie Profile: ${movieObj.title}`;
        }
    });

    return (
        <main>
            <section>
                <h2>Movie Profile</h2>
                {!movieObj ? (
                    <p>
                        Movie not found. <Link to="/">Return to home page</Link>.
                    </p>
                ) : (
                    <div className="movie-single">
                        <MovieDetail
                            movieObj={movieObj}
                            movieLink={false}
                            isFavourite={isFavourite(favourite, null, movieObj.id)}
                            baseImageUrl={baseImageUrl}
                            />
                    </div>
                )}
            </section>
        </main>
    )
}

export default IndividualMoviePage;