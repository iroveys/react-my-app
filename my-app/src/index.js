import ReactDOM from "react-dom";
import App from "./App";

// // THIRD WAY
// function App() {
//   return (
//     <div id="emad" className="emadclass">
//       Hello Matin3
//     </div>
//   );
// }

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

// ReactDOM.render(element, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
