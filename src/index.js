import React from "react";
import ReactDOM from "react-dom/client";
//bootstrap
import "bootstrap/dist/css/bootstrap.css";
//mes styles perso
import "./styles/App.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
