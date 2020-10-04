import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <HashRouter>
      <App />
    </HashRouter>
  </BrowserRouter>,
  rootElement
);
