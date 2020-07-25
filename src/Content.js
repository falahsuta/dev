import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/styles";
import { CSSTransition } from "react-transition-group";
import ScrollHorizontal from "react-scroll-horizontal";
import { useSelector } from "react-redux";
import content from "./dynamic-content";
import anime from "animejs";

import Card from "./Card";
import "./style/Content.css";

const useStyles = makeStyles({
  header: {
    top: "120px",
    left: "67px",
    fontSize: "30px",
    cursor: "normal",
    color: "rgba(81, 81, 81, 0.94)",
    fontFamily: "Recursive",
  },
});

export default () => {
  const nav = useSelector((state) => state.nav);
  const classes = useStyles();

  const letterRef = useRef();
  const letterRefL2 = useRef();
  const letterRefL3 = useRef();

  const link =
    "https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/66783490_416730902531381_5845601586805473280_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=6fy60-UU2IwAX9X0dLI&oh=72f43fda338b81d0d9f00103828ee541&oe=5F42A558";

  useEffect(() => {
    if (nav === "Home") {
      letterRef.current.innerHTML = letterRef.current.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      letterRefL2.current.innerHTML = letterRefL2.current.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      letterRefL3.current.innerHTML = letterRefL3.current.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime({
        targets: ".letter",
        rotateY: [-90, 0],
        duration: 4800,
        delay: (el, i) => 45 * i,
      });
    }
  }, [nav]);

  return (
    <div className="content">
      {/* <CSSTransition
        in={nav === "Home"}
        timeout={4300}
        classNames="alert"
        unmountOnExit
      >
        <p style={{ fontSize: "12px", opacity: "0.7" }}>Hai</p>
      </CSSTransition> */}

      {nav === "Home" && (
        <div>
          <h1 className={`ml10 ${classes.header}`}>
            <span
              style={{ marginBottom: "10px" }}
              className="text-wrapper letters"
            >
              <span style={{ display: "block" }} ref={letterRef}>
                {content["Home"]["line1"]}
              </span>
              <span style={{ display: "block" }} ref={letterRefL2}>
                {content["Home"]["line2"]}
              </span>
              <span style={{ display: "block" }} ref={letterRefL3}>
                {content["Home"]["line3"]}
              </span>
            </span>
          </h1>
        </div>
      )}

      <CSSTransition
        in={nav === "Projects"}
        timeout={4300}
        classNames="project"
        unmountOnExit
      >
        <div>
          <img style={{ width: "30%", borderRadius: "10px" }} src={link} />
        </div>
      </CSSTransition>
      <CSSTransition
        in={nav === "Projects"}
        timeout={4300}
        classNames="title"
        unmountOnExit
      >
        <div>
          <h1>ANIMATE THIS </h1>
        </div>
      </CSSTransition>

      {nav == "About Me" && (
        <div>
          <h2>{content[nav].title}</h2>
          <div>{content[nav].desc}</div>
          <Card />
        </div>
      )}

      <CSSTransition
        in={nav === "Contact"}
        timeout={4300}
        classNames="alert"
        unmountOnExit
      >
        <div
          style={
            {
              // marginLeft: "600px",
              // paddingRight: "90px",
              // border: "2px solid black",
              // borderRadius: "30px",
              // width: "530px",
            }
          }
        >
          <div
            style={{
              height: `22.7em`,
              width: "530px",
            }}
          >
            <ScrollHorizontal>
              <Card />
              <Card />
              <Card />
              {/* <Card /> */}
              {/* <Card /> */}
            </ScrollHorizontal>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};
