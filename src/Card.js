import React, { useState } from "react";
import "./Card.css";

export default (props) => {
  const [isShown, setIsShown] = useState(false);
  const [onSelect, setOnSelect] = useState("Home");
  const [onMenu, setOnMenu] = useState("");

  const menus = ["Home", "Projects", "About Me", "Contact"].map((menu) => {
    return (
      <div
        key={menu}
        className={`card ${menu == onSelect && "selected-card"}`}
        onMouseEnter={() => {
          setIsShown(true);
          setOnMenu(menu);
        }}
        onMouseLeave={() => {
          setOnMenu("");
        }}
        onClick={() => {
          setTimeout(() => {
            setOnSelect(menu);
          }, 100);
        }}
      >
        <span
          className={`card-text && ${
            menu == onMenu && onSelect !== onMenu && "moving-left"
          }`}
        >
          {menu}
        </span>
      </div>
    );
  });

  return <div className="container-card">{menus}</div>;
};
