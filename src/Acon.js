import React, { useState } from "react";
import "./style/Scroll.css";

export default (props) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div
        className="vert-move1"
        style={{
          // border: "2px solid red",
          color: isShown ? "rgba(61, 61, 61, 0.82)" : "rgba(61, 61, 61, 0.52)",
          userSelect: "none",
          width: "70px",
          height: "20px",
          marginTop: "20px",

          // transform: isShown ? "translateY(-0.11em)" : undefined,
          // display: "inline-block",
          marginLeft: props.text === "Linkedin" ? "-5px" : undefined,
        }}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <div
          style={{
            fontSize: "23px",
            marginTop: props.text === "Linkedin" ? "-2px" : undefined,
            display: "inline-block",
          }}
        >
          {/* <div style={{ marginTop: "30px" }}> */}
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

            {/* <i style={{ display: "block" }} class="ri-arrow-drop-up-line"></i> */}
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
