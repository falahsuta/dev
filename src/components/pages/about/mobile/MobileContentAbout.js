import React from "react";
import MobileGridOfLogo from "./MobileGridOfLogo";
import content from "../dynamic-content";

const MobileContentAbout = (props) => {
  const { nav } = props;
  return (
    <div className="m-about">
      <h2 className="m-aboutTitle">{content[nav] ? content[nav].title : ""}</h2>
      <div className="m-aboutDesc">{content[nav] ? content[nav].desc : ""}</div>
      <div className="m-aboutLogos">
        <MobileGridOfLogo />
      </div>
    </div>
  );
};

export default React.memo(MobileContentAbout);
