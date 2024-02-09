// import { createStore } from "redux";
// import rootReducer from "../reducers/rootReducer";

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
