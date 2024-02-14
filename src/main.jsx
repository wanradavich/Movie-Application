import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/App.css";
import AppRouter from "./routers/AppRouter";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
