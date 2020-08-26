import React, { useEffect } from "react";
import Canvas from "./Canvas";
import { useDispatch } from "react-redux";
import { selectNav } from "./actions";
import BlogCardDemo from "./BlogCardDemo";
import IconTest from "./IconTest";
import GridOfLogo from "./GridOfLogo";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectNav("Home"));
  }, []);

  return (
    <>
      <Canvas />
    </>
  );
};

export default App;
