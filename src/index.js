import React from "react";
import ReactDOM from "react-dom";

const name = "Shaaz";
const currentDate = new Date(2022, 2, 1);
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
