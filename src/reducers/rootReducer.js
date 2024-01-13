import { combineReducers } from "redux";
import popularReducer from "./popularReducer";
import topRatedReducer from "./topRatedReducer";
import nowPlayingReducer from "./nowPlayingReducer";
import upcomingReducer from "./upcomingReducer";

const rootReducer = combineReducers({
  popularMovies: popularReducer,
  topRatedMovies: topRatedReducer,
  nowPlayingMovies: nowPlayingReducer,
  upcomingMovies: upcomingReducer,
});

export default rootReducer;
