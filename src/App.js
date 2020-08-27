import React, { useEffect } from "react";
import Canvas from "./Canvas";
import { useDispatch } from "react-redux";
import { selectNav } from "./actions";
import BlogCardDemo from "./BlogCardDemo";
import IconTest from "./IconTest";
import GridOfLogo from "./GridOfLogo";
import Boxer from "./Boxer";
// import { Box } from "@material-ui/core";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectNav("Home"));
  }, []);

  return (
    <>
      {/* <Canvas /> */}
      <Boxer />
    </>
  );
};

export default App;
