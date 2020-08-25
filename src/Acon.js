import React from "react";
import "./style/Scroll.css";

export default () => {
  return (
    <>
      <div
        className="vert-move1"
        style={{ color: "rgba(61, 61, 61, 0.52)", userSelect: "none" }}
      >
        <div style={{ fontSize: "23px", display: "inline-block" }}>
          <div style={{ marginTop: "30px" }}>
            <i
              style={{
                display: "block",
                marginBottom: "-19px",
              }}
              className="ri-github-line"
            ></i>

            {/* <i style={{ display: "block" }} class="ri-arrow-drop-up-line"></i> */}
          </div>
        </div>
        <span
          style={{
            fontSize: "14px",
            display: "inline-block",
            marginLeft: "3px",
            marginTop: "34px",
            fontFamily: "Recursive",
            position: "absolute",
          }}
        >
          Github
        </span>
      </div>
    </>
  );
};
