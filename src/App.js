import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useDispatch } from "react-redux";
import { selectNav } from "./actions";

import Boxer from "./components/shared/Boxer";
import MobileApp from "./MobileApp";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectNav("Home"));
  }, [dispatch]);

  return (
    <>
      {!isMobile && <Boxer />}
      {isMobile && <MobileApp />}
      {/*  {isMobile && <View mobile={Mark} />} */}
    </>
  );
};

export default React.memo(App);
