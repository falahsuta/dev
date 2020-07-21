import React from "react";
import Sidebar from "./Sidebar";
import Current from "./Current";
import "./style/Canvas.css";

export default () => {
  return (
    <div className="container">
      <div classclassName="grid-item item-a"></div>
      <div className="grid-item sidebar">
        <Sidebar />
      </div>
      <div className="grid-item grid-current">
        <Current />
      </div>
      <div className="grid-item item-c"></div>
    </div>
  );
};
