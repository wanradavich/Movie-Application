import { useState } from 'react';

const AddFave = ({ movie, onFaveClick }) => {
  const [isFaved, setIsFaved] = useState(false);

  const addFavouriteMovie = () => {
    setIsFaved(!isFaved);
    onFaveClick(movie, !isFaved); 
  };

  return (
    <div className={`heart-container ${isFaved ? 'favorited' : ''}`} onClick={addFavouriteMovie}>
      <span className="mr-2 text-white"></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        className="bi bi-hearts"
        viewBox="0 0 16 16"
        fill={isFaved ? 'red' : 'white'} // Set the fill color based on the favorited state
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
