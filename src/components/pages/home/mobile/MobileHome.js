import React from "react";
import content from "../../../pages/home/dynamic-content";

const MobileHome = () => {
  return (
    <div className="m-page">
      <h1 className="m-heroTitle">
        <span className="m-heroLine">{content.Home.line1}</span>
        <span className="m-heroLine">{content.Home.line2}</span>
        <span className="m-heroLine">{content.Home.line3}</span>
      </h1>
      <p className="m-heroSubtitle">Passionate in Computer Science in General</p>
    </div>
  );
};

export default React.memo(MobileHome);
