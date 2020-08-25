import React, { useEffect } from "react";
import Canvas from "./Canvas";
import { useDispatch } from "react-redux";
import { selectNav } from "./actions";
import BlogCardDemo from "./BlogCardDemo";

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
      {/* <br />
      <br />
      <br />
      <br />
      <BlogCardDemo /> */}
    </div>
  );
};

export default App;
