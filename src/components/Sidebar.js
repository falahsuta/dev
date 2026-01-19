import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";

import { selectNav } from "../actions";
import "../style/Sidebar.css";

const Sidebar = () => {
  const dispatch = useDispatch();

  const [onSelect, setOnSelect] = useState("Home");
  const [onMenu, setOnMenu] = useState("");
  const [icon, setIcon] = useState(false);
  const [first, setFirst] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFirst(true);
    }, 300);
  }, []);

  const menus = ["Home", "Experience", "Projects", "About Me"].map((menu) => {
    return (
      <div
        key={menu}
        className={`card ${menu === onSelect ? "selected-card" : ""}`}
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
          className={`card-text ${
            menu === onMenu && onSelect !== onMenu ? "moving-left" : ""
          } ${menu === "About Me" ? "card-text-nowrap" : ""}`}
        >
          {menu}
        </span>

        <span className="blink card-underscore">
          {!icon && menu === onSelect && <span> _</span>}
        </span>
      </div>
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

export default React.memo(Sidebar);
