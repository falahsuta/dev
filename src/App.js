import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { selectNav } from "./actions";

import Boxer from "./components/Boxer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectNav("Home"));
  }, []);

  return (
    <>
      <Boxer />
    </>
  );
};

export default React.memo(App);
