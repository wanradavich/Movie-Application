const initialState = {
  nowPlayingMovies: [],
};

const nowPlayingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NOWPLAYING_MOVIES_SUCCESS":
      return {
        ...state,
        nowPlayingMovies: action.payload,
      };
    default:
      return state;
  }
};

export default nowPlayingReducer;
