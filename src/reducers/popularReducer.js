const initialState = {
  popularMovies: [],
};

const popularReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POPULAR_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: action.payload,
      };
    case "SET_POPULAR_MOVIES":
      return {
        ...state,
        popularMovies: action.payload,
      };
    default:
      return state;
  }
};

export default popularReducer;
