import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useDispatch } from "react-redux";
import { selectNav } from "./actions";

import Boxer from "./components/shared/Boxer";
import View from "./components/shared/View";

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
