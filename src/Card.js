import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import "./Card.css";

const useStyles = makeStyles({
  movingSlider: (props) => ({
    position: "absolute",
    top: props.Top,
    left: props.Left,
    width: "70px",
    height: "25px",
    borderRadius: "5px",
    backgroundColor: "lightgrey",
    opacity: "0.4",
    transition: "all 0.4s ease-out",
    transform: `translate(0, ${props.translate}%)`,
  }),
});

export default () => {
  const [onSelect, setOnSelect] = useState("Home");
  const [onMenu, setOnMenu] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [change, setChange] = useState(false);
  const [curridx, setCurridx] = useState(0);
  const [Top, setTop] = useState(0);
  const [Left, setLeft] = useState(0);
  const [translate, setTranslate] = useState(0);

  const props = { Top, Left, translate };
  const classes = useStyles(props);

  const posref = {
    0: useRef(),
    1: useRef(),
    2: useRef(),
    3: useRef(),
  };

  useEffect(() => {
    setTop(posref[0].current.offsetTop);
    setLeft(posref[0].current.offsetLeft);
  }, []);

  const menus = ["Home", "Projects", "About Me", "Contact"].map(
    (menu, index) => {
      return (
        <div
          ref={posref[index]}
          key={menu}
          className={`card ${menu === onSelect && "selected-card"}`}
          onMouseEnter={() => {
            setIsShown(true);
            setOnMenu(menu);
          }}
          onMouseLeave={() => {
            setOnMenu("");
          }}
          onClick={() => {
            setChange(true);
            setCurridx(index);
            setTranslate((index - curridx) * 120);

            setOnSelect("");
            setTimeout(() => {
              setOnSelect(menu);
              setLeft(posref[index].current.offsetLeft);
              setTop(posref[index].current.offsetTop);
              setChange(false);
            }, 300);
          }}
          disabled={change}
        >
          <span
            className={`card-text && ${
              menu === onMenu && onSelect !== onMenu && "moving-left"
            }`}
          >
            {menu}
          </span>
        </div>
      );
    }
  );

  return (
    <div>
      <div className="container-card">{menus}</div>
      <div className={change ? classes.movingSlider : ""}></div>
    </div>
  );
};
