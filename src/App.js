import React, { useEffect } from "react";
import Canvas from "./Canvas";
import { useDispatch } from "react-redux";
import { selectNav } from "./actions";

// import TestScroll from "./TestScroll";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectNav("Home"));
  }, []);

  return (
    <div>
      {/* <TestScroll /> */}
      <Canvas />
      {/* <Animate /> */}
    </div>
  );
};

export default App;
