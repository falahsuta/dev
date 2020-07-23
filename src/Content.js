import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { CSSTransition } from "react-transition-group";
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
  const [nav, setNav] = useState("Home");
  const [project, setProject] = useState(false);
  const classes = useStyles();

  const content = {
    Home: "Hi, Im falah from from la",
    About: { title: "inititle", desc: "inidesc" },
  };

  const link =
    "https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/66783490_416730902531381_5845601586805473280_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=6fy60-UU2IwAX9X0dLI&oh=72f43fda338b81d0d9f00103828ee541&oe=5F42A558";

  useEffect(() => {}, [nav]);

  return (
    <div className="content">
      <div>{nav}</div>
      <div
        onClick={() => {
          setNav("Home");
        }}
        className={classes.basic}
      >
        Home
      </div>

      <div
        onClick={() => {
          setNav("Project");
        }}
        className={classes.basic}
      >
        Project
      </div>

      <div
        onClick={() => {
          setNav("About");
        }}
        className={classes.basic}
      >
        About
      </div>

      {nav == "Home" && <div>{content[nav]}</div>}

      <CSSTransition
        in={nav === "Project"}
        timeout={4300}
        classNames="project"
        unmountOnExit
        // onEnter={() => setProject(true)}
        // onExited={() => setProject(false)}
      >
        <div>
          <img style={{ width: "30%", borderRadius: "10px" }} src={link} />
        </div>
      </CSSTransition>

      <CSSTransition
        in={nav === "Project"}
        timeout={4300}
        classNames="title"
        unmountOnExit
        // onEnter={() => setProject(true)}
        // onExited={() => setProject(false)}
      >
        <div>
          <h1>ANIMATE THIS </h1>
        </div>
      </CSSTransition>

      {nav == "About" && (
        <div>
          <h2>{content[nav].title}</h2>
          <div>{content[nav].desc}</div>
        </div>
      )}
    </div>
  );
};
