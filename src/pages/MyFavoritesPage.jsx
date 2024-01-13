import HomeCategories from "../components/HomeCategories";
import WatchList from "../components/WatchList";

function FavePage({ faveList }) {
    const baseImageUrl = "https://image.tmdb.org/t/p/w500";

    // Check if faveList is undefined or null before mapping
    if (!faveList) {
        return <p>No favorite movies available.</p>;
    }

    return (
        <>
            <div className="home-cat">
                <HomeCategories />
            </div>
            <h2 className="header-title">Favorite Movies</h2>
            <div className="movie-list">
                {faveList.map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <img
                            className="movie-img"
                            src={`${baseImageUrl}${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className="overlay">
                            <div className="overlay-buttons">
                                <WatchList />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default FavePage;
