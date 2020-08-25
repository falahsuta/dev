import React, { useEffect } from "react";
import Canvas from "./Canvas";
import { useDispatch } from "react-redux";
import { selectNav } from "./actions";
import BlogCardDemo from "./BlogCardDemo";
import IconTest from "./IconTest";
import { Icon } from "@material-ui/core";

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
      {/* <IconTest /> */}
      {/* <Animate /> */}
      {/* <br />
      <br />
      <br />
      <br /> */}
      {/* <BlogCardDemo /> */}
    </div>
  );
};

export default App;
