import React from "react";
import ReactDOM from "react-dom";
import Canvas from "./Canvas";
import Card from "./Card";

const App = () => {
  return (
    <div>
      {/* <Canvas /> */}
      <Card />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
