import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  countPlace: 547,
};
ReactDOM.render(
  <App placesCount={Settings.countPlace} />,
  document.querySelector("#root")
);
