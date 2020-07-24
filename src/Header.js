import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import "./style/Header.css";

const useStyles = makeStyles({
  icon: {
    marginLeft: "20px",
    marginRight: "2px",
    fontSize: "32px",
    color: "#5c5c5c",
  },
  in: {
    transition: "all 0.4s ease-out",
    transform: "translate(1em, 0)",
  },
  out: {
    opacity: "0",
    transition: "all 0.4s ease-out",
    transform: "translate(0,0.3em)",
  },
});

export default () => {
  const [show, setShow] = useState(false);
  const [out, setOut] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 400);

    // setTimeout(() => {
    //   setOut(true);
    // }, 1900);
  }, []);

  return (
    <div>
      <div className={out ? classes.out : ""}>
        <div
          style={{ opacity: show ? 1 : 0 }}
          className={show ? classes.in : ""}
        >
          <div className="header">
            <i className={`ri-terminal-box-fill ${classes.icon}`}></i>
            <span>
              Test-Test<span className="blink">_</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// const content = {
//   "Home": {
//     "title": ""
//   }
// }
