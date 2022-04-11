import React from "react";
import ReactDOM from "react-dom";

import Navigation from "./Navigation";

import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Navigation />
  </React.StrictMode>,
  document.getElementById("root")
);
