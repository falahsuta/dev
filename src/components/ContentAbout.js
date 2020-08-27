import React from "react";
import GridOfLogo from "./GridOfLogo";
import content from "./dynamic-content";

export default (props) => {
  const { nav } = props;

  const spacing = (num) => {
    return <div style={{ marginTop: "3px", width: "30px", height: num }}></div>;
  };

  return (
    <>
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
    </>
  );
};
