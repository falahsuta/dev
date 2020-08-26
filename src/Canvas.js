import React from "react";
import Sidebar from "./Sidebar";
import Current from "./Current";
import Content from "./Content";
import Header from "./Header";
import GridOfLogo from "./GridOfLogo";

import "./style/Canvas.css";

export default () => {
  return (
    <>
      <div className="container">
        <div className="center-side">
          <Content />
        </div>
        <div className="right-side">
          <Current />
          <Sidebar />
        </div>
      </div>
    </>
  );
};
