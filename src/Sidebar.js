import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import "./style/Sidebar.css";

const useStyles = makeStyles({
  movingSlider: (props) => ({
    position: "absolute",
    top: props.Top,
    left: props.Left,
    width: "140px",
    height: "40px",
    borderRadius: "5px",
    backgroundColor: "#eeeeee",
    opacity: "0.3",
    transition: "all 0.4s ease-out",
    transform: `translate(0, ${props.translate}%)`,
  }),
});

export default () => {
  const [onSelect, setOnSelect] = useState("Home");
  const [onMenu, setOnMenu] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [change, setChange] = useState(false);
  const [icon, setIcon] = useState(false);
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

  const logo = [
    "ri-apps-line",
    "ri-code-s-slash-line",
    "ri-rhythm-fill",
    "ri-account-circle-line",
  ];

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
            if (onMenu !== onSelect) {
              setChange(true);
              setTimeout(() => {
                setIcon(true);
              }, 200);

              setCurridx(index);
              setTranslate((index - curridx) * 120);
              setOnSelect("");

              setTimeout(() => {
                setIcon(false);
              }, 900);

              setTimeout(() => {
                setOnSelect(menu);
                setLeft(posref[index].current.offsetLeft);
                setTop(posref[index].current.offsetTop);
                setChange(false);
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
              color: "rgba(70, 70, 70, 0.878)",
              marginRight: "17px",
              marginTop: `${onSelect === "About Me" ? "1px" : "5px"}`,
              fontSize: "13px",
              transition: "all 0.1s ease-in-out",
              opacity: "0.8",
            }}
          >
            {!icon && menu === onSelect && <i className={logo[index]}></i>}
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
