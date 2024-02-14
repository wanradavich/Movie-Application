import { connect } from "react-redux";
import { addToWatchlist } from "../actions/watchlistActions";

const Watchlist = ({ movie, addToWatchlist }) => {
  const handleWatchlistClick = () => {
    addToWatchlist(movie);
  };

  return (
    <div className="watch-list-container" onClick={handleWatchlistClick}>
      <span className="mr-2 text-white"></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-plus-square-fill"
        viewBox="0 0 16 16"
      >
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
      </svg>
    </div>
  );
};

const mapDispatchToPropsWatchlist = (dispatch) => ({
  addToWatchlist: (movie) => dispatch(addToWatchlist(movie)),
});

export default connect(null, mapDispatchToPropsWatchlist)(Watchlist);

// const Watchlist = ({ movie, onClick }) => {
//   const handleWatchListClick = () => {
//     onClick(movie);
//   };

//   return (
//     <div className="watch-list-container" onClick={handleWatchListClick}>
//       <span className="mr-2 text-white"></span>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="30"
//         height="30"
//         fill="currentColor"
//         className="bi bi-plus-square-fill"
//         viewBox="0 0 16 16"
//       >
//         <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
//       </svg>
//     </div>
//   );
// };

// export default Watchlist;
