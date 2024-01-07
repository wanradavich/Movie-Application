import { useEffect } from "react";

function MovieAPI({ updateMovieList, limit }) {
  useEffect(() => {
    const getMovie = async () => {
      try {
        const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
        );
        const data = await response.json();
        const limitedMovies = data.results.slice(0, limit);
        updateMovieList(limitedMovies);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    };
    getMovie();
  }, [updateMovieList, limit]);

  return null; // Return null or an empty div, as MovieAPI doesn't render any UI
}

export default MovieAPI;

// import { useEffect } from "react";

// function MovieAPI({ updateMovieList }) {
//   const getMovie = () => {
//     const apiKey = "d54e5d8cf2227762d2ed37b16b4ea050";
//     const perPage = 12; // Limit to 12 movies per request
//     const page = 1; // Request the first page

//     const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}&per_page=${perPage}`;

//     fetch(apiUrl)
//       .then((res) => res.json())
//       .then((json) => {
//         const limitedMovies = json.results.slice(0, 12); //Limit movies to 12
//         updateMovieList(limitedMovies);
//         console.log(limitedMovies); // Log the fetched movies
//       })
//       .catch((error) => console.error("Error fetching movies:", error));
//   };

//   useEffect(() => {
//     getMovie();
//   }, []);

//   return null; // Return null or an empty div, as MovieAPI doesn't render any UI
// }

// export default MovieAPI;
