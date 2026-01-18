import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useDispatch } from "react-redux";
import { selectNav } from "./actions";

import Boxer from "./components/Boxer";
import View from "./components/View";

const App = () => {
  const dispatch = useDispatch();
  const Mark = "Mark";

  useEffect(() => {
    dispatch(selectNav("Home"));
  }, [dispatch]);

  return (
    <>
      {!isMobile && <Boxer />}
      {isMobile && <View mobile={Mark} />}
    </>
  );
};

export default React.memo(App);
