import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ItemsContextProvider } from "./ItemsContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ItemsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ItemsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
