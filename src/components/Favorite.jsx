import { connect } from "react-redux";
import { addToFavorites } from "../actions/favoritesActions";

const Favorite = ({ movie, addToFavorites }) => {
  const handleFavoriteClick = () => {
    addToFavorites(movie);
  };

  return (
    <div className="favorite-container" onClick={handleFavoriteClick}>
      <span className="mr-2 text-white"></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314c-2.987-3.102-7-1.072-7 3.83 0 4.768 7 9.872 7 9.872s7-5.104 7-9.872c0-4.902-4.013-6.932-7-3.83z"
        />
      </svg>
    </div>
  );
};

const mapDispatchToPropsFavorite = (dispatch) => ({
  addToFavorites: (movie) => dispatch(addToFavorites(movie)),
});

export default connect(null, mapDispatchToPropsFavorite)(Favorite);

// const Favorite = ({ movie, onClick }) => {
//   const handleFaveClick = () => {
//     onClick(movie);
//   };

//   return (
//     <div className="heart-container" onClick={handleFaveClick}>
//       <span className="mr-2 text-white"></span>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="30"
//         height="30"
//         className="bi bi-hearts"
//         viewBox="0 0 16 16"
//       >
//         <path
//           fillRule="evenodd"
//           d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015m6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343M7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358"
//         />
//       </svg>
//     </div>
//   );
// };

// export default Favorite;
