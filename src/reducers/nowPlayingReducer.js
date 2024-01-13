const nowPlayingReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_NOWPLAYING_MOVIES_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};

export default nowPlayingReducer;
