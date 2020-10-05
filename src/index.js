import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import App from "./App";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </BrowserRouter>,
  rootElement
);
