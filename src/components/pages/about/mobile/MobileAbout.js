import React from "react";
import MobileContentAbout from "./MobileContentAbout";

const MobileAbout = () => {
  return (
    <div className="m-page">
      <MobileContentAbout nav="About Me" />
    </div>
  );
};

export default React.memo(MobileAbout);
