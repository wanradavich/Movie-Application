const upcomingReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_UPCOMING_MOVIES_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};

export default upcomingReducer;
