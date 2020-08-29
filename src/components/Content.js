import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/styles";
import { CSSTransition } from "react-transition-group";
import anime from "animejs";
import { useSelector } from "react-redux";

import "../style/Content.css";
import content from "./dynamic-content";
import ContentAbout from "./ContentAbout";
import ContentProj from "./ContentProj";

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

const paragraph = {
  fontSize: "12px",
  marginTop: "95px",
  marginLeft: "41px",
  opacity: "0.6",
  userSelect: "none",
};

const Content = () => {
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
            style={paragraph}
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
          <div>{nav === "Projects" && <ContentProj />}</div>
        </CSSTransition>

        {nav && (
          <CSSTransition
            in={nav === "About Me"}
            timeout={4300}
            classNames="abouts"
            unmountOnExit
          >
            <ContentAbout nav={nav} />
          </CSSTransition>
        )}
      </div>
    </>
  );
};

export default React.memo(Content);
