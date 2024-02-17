import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/App.css";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
