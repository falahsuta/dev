import React from "react";
import ReactDOM from "react-dom";
import Canvas from "./Canvas";

const App = () => {
  return (
    <div>
      <Canvas />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
