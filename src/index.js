import React from "react";
import ReactDOM from "react-dom";
import Canvas from "./Canvas";
import Animate from "./Animate";

const App = () => {
  return (
    <div>
      <Canvas />
      {/* <Animate /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
