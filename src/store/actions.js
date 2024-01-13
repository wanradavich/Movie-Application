// actions.js
export const addToFaveList = (movie) => ({
    type: 'ADD_TO_FAVE_LIST',
    payload: movie,
  });
  
  export const removeFromFaveList = (movieId) => ({
    type: 'REMOVE_FROM_FAVE_LIST',
    payload: movieId,
  });