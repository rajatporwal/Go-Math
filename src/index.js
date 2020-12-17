import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";
import App from "./App";

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
)

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
