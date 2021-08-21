import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ToDosProvider } from "./redux";

ReactDOM.render(
  <ToDosProvider>
    <App />
  </ToDosProvider>,
  document.getElementById("root")
);
