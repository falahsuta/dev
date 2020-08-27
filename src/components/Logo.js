import React, { useState } from "react";
import "../style/Scroll.css";

export default (props) => {
  const [isShown, setIsShown] = useState(false);

  // On Hover
  const handleOpen = () => {
    setIsShown(true);
  };

  const handleClose = () => {
    setIsShown(false);
  };

  return (
    <>
      <div
        className="vert-move1"
        style={{
          color: isShown ? "rgba(61, 61, 61, 0.82)" : "rgba(61, 61, 61, 0.52)",
          userSelect: "none",
          width: "70px",
          height: "20px",
          marginTop: "20px",
          marginLeft: props.text === "Linkedin" ? "-5px" : undefined,
        }}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
      >
        <div
          style={{
            fontSize: "23px",
            marginTop: props.text === "Linkedin" ? "-2px" : undefined,
            display: "inline-block",
          }}
        >
          <div>
            <i
              style={{
                display: "block",
                marginBottom: "-39px",
                cursor: "pointer",
              }}
              className={
                isShown
                  ? `ri-${props.text.toLowerCase()}-fill`
                  : `ri-${props.text.toLowerCase()}-line`
              }
            ></i>
          </div>
        </div>
        <span
          style={{
            fontSize: "14px",
            display: "inline-block",
            marginLeft: "1px",
            marginTop: "4px",
            fontFamily: "Recursive",
            position: "absolute",
            cursor: "pointer",
          }}
        >
          {props.text}
        </span>
      </div>
    </>
  );
};
