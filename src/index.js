import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter basename="/React">
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </BrowserRouter>,
  rootElement
);
