import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { makeStyles } from "@material-ui/styles";

import "./style/animate.css";

const useStyles = makeStyles({
  root: {
    background: "lightgrey",
    width: "130px",
    height: "130px",
    position: "absolute",
    transition: "all 0.4s ease-in-out",
  },
});

export default () => {
  const namakelas = "alert";
  const classes = useStyles();
  const [exist, setExist] = useState(false);
  const [exist2, setExist2] = useState(false);
  const [move, setMove] = useState(false);
  const [move2, setMove2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExist(true);
    }, 550);

    // setTimeout(() => {
    //   setExist2(true);
    // }, 1200);

    setTimeout(() => {
      setMove(true);
    }, 600);

    // setTimeout(() => {
    //   setMove(true);
    // }, 1000);
  }, []);

  return (
    <div>
      <CSSTransition
        in={exist}
        timeout={1300}
        classNames={namakelas}
        unmountOnExit
      >
        <div className={`${classes.root} ${move ? "move" : ""}`}></div>
      </CSSTransition>
      <CSSTransition
        in={exist2}
        timeout={1300}
        classNames={namakelas}
        unmountOnExit
      >
        <div
          style={{ top: "150px" }}
          className={`${classes.root} ${move ? "move" : ""}`}
        ></div>
      </CSSTransition>
    </div>
  );
};
