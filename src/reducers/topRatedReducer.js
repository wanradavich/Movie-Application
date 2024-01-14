const initialState = {
  topRatedMovies: [],
};

const topRatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TOPRATED_MOVIES_SUCCESS":
      return {
        ...state,
        topRatedMovies: action.payload,
      };

    default:
      return state;
  }
};

export default topRatedReducer;
