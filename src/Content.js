import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/styles";
import { CSSTransition } from "react-transition-group";
import ScrollHorizontal from "react-scroll-horizontal";
import { useSelector } from "react-redux";
import content from "./dynamic-content";
import anime from "animejs";

import Card from "./Card";
import BlogCardDemo from "./BlogCardDemo";
import "./style/Content.css";
import ScrollUp from "./ScrollUp";
import GridOfLogo from "./GridOfLogo";

const useStyles = makeStyles({
  header: {
    top: "110px",
    left: "40px",
    fontSize: "30px",
    cursor: "normal",
    color: "rgba(81, 81, 81, 0.94)",
    fontFamily: "Recursive",
  },
});

export default () => {
  const [home, setHome] = useState(false);
  const nav = useSelector((state) => state.nav);
  const classes = useStyles();

  const letterRef = useRef();
  const letterRefL2 = useRef();
  const letterRefL3 = useRef();
  const smallText = useRef();

  const spacing = (num) => {
    return <div style={{ marginTop: "3px", width: "30px", height: num }}></div>;
  };

  const link =
    "https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/66783490_416730902531381_5845601586805473280_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=6fy60-UU2IwAX9X0dLI&oh=72f43fda338b81d0d9f00103828ee541&oe=5F42A558";

  useEffect(() => {
    if (nav === "Home") {
      setTimeout(() => {
        setHome(true);
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

        smallText.current.innerHTML = smallText.current.textContent.replace(
          /\S/g,
          "<span class='lettera'>$&</span>"
        );

        anime({
          targets: ".letter",
          rotateY: [-90, 0],
          duration: 4800,
          delay: (el, i) => 45 * i,
        });

        anime({
          targets: ".ml12 .lettera",
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el, i) => 10 * (i + 1),
        });
      }, 300);
    }
    if (nav !== "Home") {
      setHome(false);
    }
  }, [nav]);

  return (
    <>
      <div className="content">
        {home && (
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

        {home && (
          <p
            className={`${classes.header} ml12`}
            style={{
              fontSize: "12px",
              marginTop: "95px",
              marginLeft: "41px",
              opacity: "0.6",
              userSelect: "none",
            }}
            ref={smallText}
          >
            Passionate in Front-End Dev / Webdev in general
          </p>
        )}

        <CSSTransition
          in={nav === "Projects"}
          timeout={4300}
          classNames="alert"
          unmountOnExit
        >
          <div>
            {nav === "Projects" && (
              <>
                <div
                  style={{
                    height: `22.7em`,
                    width: "530px",
                    // marginTop: "190px",
                    borderRadius: "20px",
                  }}
                >
                  <ScrollHorizontal>
                    <div style={{ margin: "50px 35px" }}>
                      <BlogCardDemo
                        header="Disscuss"
                        text="Reddit wannabe but with some preferences style of mine."
                      />
                    </div>
                    <div style={{ margin: "100px 45px" }}>
                      <BlogCardDemo
                        header="Portofolio"
                        text="A Personal website for showcase project i've done in past."
                      />
                    </div>

                    <div style={{ margin: "50px 45px" }}>
                      <BlogCardDemo
                        header="Info Extractor"
                        text="Web based app to extract relevant information given text/articles input."
                      />
                    </div>
                    <div style={{ margin: "100px 45px" }}>
                      <BlogCardDemo
                        header="15-Puzzle Solver"
                        text="CLI based visualizer for solving 15-puzzle using branch and bound."
                      />
                    </div>
                  </ScrollHorizontal>
                  <div style={{ marginLeft: "220px" }}>
                    <ScrollUp />
                  </div>
                </div>
              </>
            )}
          </div>
        </CSSTransition>
        {/* <br /> */}
        {nav && (
          <CSSTransition
            in={nav === "About Me"}
            timeout={4300}
            classNames="abouts"
            unmountOnExit
          >
            <div
              style={{
                fontFamily: "Recursive",
                position: "absolute",
                marginTop: "10px",
                marginLeft: "20px",

                width: "510px",
                height: "900px",
                userSelect: "none",
              }}
            >
              {spacing(45)}
              <h2 style={{ color: "rgba(61, 61, 61, 0.82)" }}>
                {content[nav] ? content[nav].title : ""}
              </h2>
              <div style={{ lineHeight: 1.6, color: "rgba(61, 61, 61, 0.72)" }}>
                {content[nav] ? content[nav].desc : ""}
              </div>

              <GridOfLogo />
            </div>
          </CSSTransition>
        )}
      </div>
    </>
  );
};
