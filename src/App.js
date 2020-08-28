import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { selectNav } from "./actions";

import Boxer from "./components/Boxer";
import Tester from "./Tester";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectNav("Home"));
  }, []);

  return (
    <>
      {/* <Tester /> */}
      <Boxer />
    </>
  );
};

export default React.memo(App);
