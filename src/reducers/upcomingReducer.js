const initialState = {
  upcomingMovies: [],
};

const upcomingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_UPCOMING_MOVIES_SUCCESS":
      return {
        ...state,
        upcomingMovies: action.payload,
      };
    default:
      return state;
  }
};

export default upcomingReducer;
