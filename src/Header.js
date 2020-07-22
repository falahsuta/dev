import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import "./style/Header.css";

const useStyles = makeStyles({
  root: {
    transition: "all 0.4s ease-out",
    transform: `translate(1em, 0)`,
  },
  icon: {
    marginLeft: "20px",
    marginRight: "2px",
    fontSize: "32px",
    color: "#5c5c5c",
  },
});

export default () => {
  const [show, setShow] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 400);
  }, []);

  return (
    <div style={{ opacity: show ? 1 : 0 }} className={show ? classes.root : ""}>
      <div className="header">
        <i className={`ri-terminal-box-fill ${classes.icon}`}></i>
        <span>
          Falah-Sutawindaya<span className="blink">_</span>
        </span>
      </div>
    </div>
  );
};
