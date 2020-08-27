import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";

import { selectNav } from "../actions";
import "../style/Sidebar.css";

const useStyles = makeStyles({});

export default () => {
  const dispatch = useDispatch();

  const [onSelect, setOnSelect] = useState("Home");
  const [onMenu, setOnMenu] = useState("");
  const [icon, setIcon] = useState(false);
  const [first, setFirst] = useState(false);

  const classes = useStyles();
  const logo = [
    "ri-arrow-left-s-line",
    "ri-code-s-slash-line",
    "ri-arrow-left-s-line",
  ];

  useEffect(() => {
    setTimeout(() => {
      setFirst(true);
    }, 300);
  }, []);

  const menus = ["Home", "Projects", "About Me"].map((menu, index) => {
    return (
      <>
        <div
          key={menu}
          className={`card ${menu === onSelect && "selected-card"}`}
          onMouseEnter={() => {
            setOnMenu(menu);
          }}
          onMouseLeave={() => {
            setOnMenu("");
          }}
          onClick={() => {
            if (onMenu !== onSelect) {
              setTimeout(() => {
                setIcon(true);
              }, 200);
              setOnSelect("");
              setTimeout(() => {
                setIcon(false);
              }, 900);

              setTimeout(() => {
                setOnSelect(menu);
                dispatch(selectNav(menu));
              }, 500);
            }
          }}
        >
          <span
            className={`card-text && ${
              menu === onMenu && onSelect !== onMenu && "moving-left"
            }`}
          >
            {menu}
          </span>

          <span
            style={{
              color: "rgba(40, 40, 40, 0.899)",
              cursor: "pointer",
              marginRight: "-13px",
              marginBottom: "2px",
              fontSize: "15px",
              transition: "all 0.1s ease-in-out",
              opacity: "0.75",
            }}
            className="blink"
          >
            {!icon && menu === onSelect && <span> _</span>}
          </span>
        </div>
      </>
    );
  });

  return (
    <>
      <CSSTransition in={first} timeout={4300} classNames="first" unmountOnExit>
        <div className="container-card">{menus}</div>
      </CSSTransition>
    </>
  );
};
