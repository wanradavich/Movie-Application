const FaveList = () => {
    const baseImageUrl = "https://image.tmdb.org/t/p/w500";
    const faveMovies =
      JSON.parse(localStorage.getItem("faveMovies")) || [];

    return (
      <div>
        <h2 className="header-title">My Favorites</h2>
        <div className="movie-list">
        {faveMovies.length > 0 ? (
          faveMovies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
              className="movie-img"
                src={
                  movie.poster_path
                    ? `${baseImageUrl}${movie.poster_path}`
                    : "No Image Provided by API"
                }
                alt={movie.title}
              />
              {/* <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>
              <p>Rating: {movie.vote_average}%</p>
              <p>{movie.overview}</p> */}
            </div>
          ))
        ) : (
          <p>Sorry, you have no movies in your favorites.</p>
        )}
      </div>
      </div>
    );
  };
  
  export default FaveList;


  
  