import React from "react";
import "./style/Header.css";

export default () => {
  return (
    <div className="header">
      <i
        style={{
          marginLeft: "20px",
          marginRight: "2px",
          fontSize: "32px",
          color: "#5c5c5c",
        }}
        className="ri-terminal-box-fill"
      ></i>
      <span>
        Falah-Sutawindaya<span className="blink">_</span>
      </span>
    </div>
  );
};
