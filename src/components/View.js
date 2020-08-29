import React, { useEffect, useState, useRef } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { CSSTransition } from "react-transition-group";

import "../style/Compat.css";
import Logo from "./Logo";

const useStyles = makeStyles({
  header: {
    fontSize: "27px",
    cursor: "normal",
    color: "rgba(81, 81, 81, 0.84)",
    fontFamily: "Recursive",
  },
});

const View = (props) => {
  const classes = useStyles();
  const [isShow, setIsShow] = useState(false);
  const [isLogo, setIsLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 300);
    setTimeout(() => {
      setIsLogo(true);
    }, 300);
  }, []);

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <br />

        <h1
          className={classes.header}
          style={{ marginTop: props.mobile ? "270px" : "170px" }}
        >
          <CSSTransition
            in={isShow}
            timeout={4300}
            classNames="abouts3"
            unmountOnExit
          >
            <div>
              <span style={{ display: "block" }}>
                {props.mobile
                  ? "Please use desktop,"
                  : "Some libraries weren't supported"}
              </span>
              <span style={{ display: "block" }}>
                {props.mobile ? "For best experience." : "for this browser,"}
              </span>
              {props.edge && (
                <span style={{ display: "block" }}>
                  Please kindly use Chrome instead.
                </span>
              )}
            </div>
          </CSSTransition>
          {/* Animation choices (change classNames) so thats why it's separated */}
          <CSSTransition
            in={isLogo}
            timeout={4300}
            classNames="abouts3"
            unmountOnExit
          >
            <Logo
              text="Github"
              rep="Repository"
              mobile={props.mobile || props.edge}
            />
          </CSSTransition>
        </h1>
      </Grid>
    </>
  );
};

export default React.memo(View);
