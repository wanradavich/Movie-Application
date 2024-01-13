const topRatedReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TOPRATED_MOVIES_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};

export default topRatedReducer;
