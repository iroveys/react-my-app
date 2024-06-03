import React from "react";
import ReactDOM from "react-dom";

// THIRD WAY
function App() {
  return (
    <div id="emad" className="emadclass">
      Hello Matin3
    </div>
  );
}

// SECOND WAY
// const element = (
//   <div id="emad" className="emadclass">
//     Hello Ali2
//   </div>
// );

//FIRST WAY
// const element = React.createElement(
//   "div",
//   { id: "emad", className: "emadclass" },
//   "Hello world"
// );

const root = document.getElementById("root");

// ReactDOM.render(element, root);
ReactDOM.render(<App />, root);
