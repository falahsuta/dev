import React from "react";
import "../style/Scroll.css";

const ScrollUp = () => {
  return (
    <>
      <div
        className="vert-move"
        style={{ color: "rgba(61, 61, 61, 0.52)", userSelect: "none" }}
      >
        <div style={{ fontSize: "23px", display: "inline-block" }}>
          <div style={{ marginTop: "30px" }}>
            <i
              style={{
                display: "block",
                marginBottom: "-19px",
              }}
              className="ri-arrow-up-s-line"
            ></i>

            <i
              style={{ display: "block" }}
              className="ri-arrow-drop-up-line"
            ></i>
          </div>
        </div>
        <span
          style={{
            fontSize: "14px",
            display: "inline-block",
            marginLeft: "1px",
            marginTop: "36px",
            fontFamily: "Recursive",
            position: "absolute",
          }}
        >
          Scroll Up
        </span>
      </div>
    </>
  );
};

export default React.memo(ScrollUp);
