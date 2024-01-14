// import { useEffect, useState } from 'react';

// const AddFave = ({ movie, onClick }) => {
//   const [isInFaveList, setIsInFaveList] = useState(false);

//   useEffect(() => {
//     const faveMovies = JSON.parse(localStorage.getItem('faveMovies')) || [];
//     setIsInFaveList(faveMovies.some((faveMovie) => faveMovie.id === movie.id));
//   }, [movie.id]);

//   const handleFaveClick = () => {
//     onClick(movie);
//     setIsInFaveList(!isInFaveList);
//   };

//   return (
//     <div
//       className={`heart-container ${isInFaveList ? 'active' : ''}`}
//       onClick={handleFaveClick}
//     >
//       <span className="mr-2 text-white"></span>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="30"
//         height="30"
//         className={`bi bi-heart${isInFaveList ? '-fill' : ''}`}
//         viewBox="0 0 16 16"
//       >
//         <path
//           fillRule="evenodd"
//           d="M7.375 14.5s-1.5 1.5-2.375 1.5C4.5 16 4 15 4 15s-1.5 1-1.625 1.5c-.108.414-.625 2.5 2.625 2.5 3.25 0 2.75-2.25 2.75-2.5 0-.25-.5-1.5-.5-1.5zM1 7c0-3.5 2.5-6 6-6 3.148 0 5.5 2.5 5.5 6 0 4-6 9-6 9s-6-5-6-9z"
//         />
//       </svg>
//     </div>
//   );
// };

// export default AddFave;



// const AddFave = ({ movie, onClick }) => {
    
//   const isMovieInFaveList = () => {
//     const faveMovies = JSON.parse(localStorage.getItem('faveMovies')) || [];
//     return faveMovies.some((faveMovie) => faveMovie.id === movie.id);
//   };

//   const handleFaveClick = () => {
//     onClick(movie);
//   };

//   return (
//     <div
//       className={`heart-container ${isMovieInFaveList() ? 'active' : ''}`}
//       onClick={handleFaveClick}
//     >
//       <span className="mr-2 text-white"></span>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="30"
//         height="30"
//         className={`bi bi-heart${isMovieInFaveList() ? '-fill' : ''}`}
//         viewBox="0 0 16 16"
//       >
//         <path
//           fillRule="evenodd"
//           d="M7.375 14.5s-1.5 1.5-2.375 1.5C4.5 16 4 15 4 15s-1.5 1-1.625 1.5c-.108.414-.625 2.5 2.625 2.5 3.25 0 2.75-2.25 2.75-2.5 0-.25-.5-1.5-.5-1.5zM1 7c0-3.5 2.5-6 6-6 3.148 0 5.5 2.5 5.5 6 0 4-6 9-6 9s-6-5-6-9z"
//         />
//       </svg>
//     </div>
//   );
// };

// export default AddFave;

////////////////////////////////////////////////////////////////////////


const AddFave = ({ movie, onClick }) => {

    const handleFaveClick = () => {
      onClick(movie);
    };

    return (
        <div className="heart-container" onClick={handleFaveClick}>
            <span className="mr-2 text-white"></span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                className="bi bi-hearts"
                viewBox="0 0 16 16"
            >
                <path
                    fillRule="evenodd"
                    d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015m6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343M7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358"
                />
            </svg>
        </div>
    );
};

export default AddFave;


////////////////

