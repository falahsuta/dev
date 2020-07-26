import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import "./style/Sidebar.css";

import { useDispatch } from "react-redux";
import { selectNav } from "./actions";

const useStyles = makeStyles({});

export default () => {
  const dispatch = useDispatch();

  const [onSelect, setOnSelect] = useState("Home");
  const [onMenu, setOnMenu] = useState("");
  const [icon, setIcon] = useState(false);

  // const props = { Top, Left, translate };
  const classes = useStyles();
  const logo = [
    "ri-menu-3-line",
    "ri-code-s-slash-line",
    "ri-rhythm-fill",
    // "ri-open-arm-line",
  ];

  const menus = ["Home", "Projects", "About Me"].map((menu, index) => {
    return (
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
            marginRight: "21px",
            marginTop: `${onSelect === "About Me" ? "1px" : "5px"}`,
            fontSize: "15px",
            transition: "all 0.1s ease-in-out",
            opacity: "0.8",
          }}
        >
          {!icon && menu === onSelect && <i className={logo[index]}></i>}
        </span>
      </div>
    );
  });

  return (
    <div>
      <div className="container-card">{menus}</div>
    </div>
  );
};
