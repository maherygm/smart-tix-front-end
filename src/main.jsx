import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouteConfig from "./configs/routes/RouteConfig";
import "./styles/index.css";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./configs/stateManagers/redux/reducer/index";

import { Provider } from "react-redux";
import { getEvent } from "./configs/stateManagers/redux/action/evenement.action";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
store.dispatch(getEvent());
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RouteConfig />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
