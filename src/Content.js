import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/styles";
import { CSSTransition } from "react-transition-group";
import ScrollHorizontal from "react-scroll-horizontal";
import { useSelector } from "react-redux";
import anime from "animejs";

import Card from "./Card";
import "./style/Content.css";

const useStyles = makeStyles({
  opa: {
    opacity: "0",
  },
  in: {
    opacity: "1",
    position: "absolute",
    transition: "all 0.4s ease-out",
    transform: "translate(1em, 0)",
  },
  out: {
    opacity: "0",
    transition: "all 0.4s ease-out",
    transform: "translate(0,0.3em)",
  },
  basic: {
    cursor: "pointer",
    margin: "10px",
  },
});

export default () => {
  const animateRef = useRef();
  const letterRef = useRef();
  const nav = useSelector((state) => state.nav);
  const classes = useStyles();

  const content = {
    Home: "Hi, Im falah from from la",
    "About Me": { title: "inititle", desc: "inidesc" },
  };

  const link =
    "https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/66783490_416730902531381_5845601586805473280_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=6fy60-UU2IwAX9X0dLI&oh=72f43fda338b81d0d9f00103828ee541&oe=5F42A558";

  // console.log(anime.timeline());

  useEffect(() => {
    letterRef.current.innerHTML = letterRef.current.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: ".ml10 .letter",
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (el, i) => 45 * (i + 1),
    });
  }, []);

  return (
    <div className="content">
      <div>{nav}</div>
      {nav == "Home" && (
        <div>
          <h1
            style={{
              cursor: "normal",
              color: "rgba(0,0,0,0.4)",
              fontFamily: "Fira Sans",
            }}
            className="font-anime"
            ref={animateRef}
            className="ml10"
          >
            <span className="text-wrapper">
              <span ref={letterRef} className="letters">
                PANJANG SEKALi
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
