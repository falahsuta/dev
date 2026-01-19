import React from "react";
import content from "../../../pages/home/dynamic-content";

const MobileHome = () => {
  return (
    <div className="m-page">
      <h1 className="m-heroTitle">
        <span className="m-heroLine" data-anime-title>
          {content.Home.line1}
        </span>
        <span className="m-heroLine" data-anime-title>
          {content.Home.line2}
        </span>
        <span className="m-heroLine" data-anime-title>
          {content.Home.line3}
        </span>
      </h1>
      <p className="m-heroSubtitle font-anime ml12" data-anime-subtitle>
        {content.Home.line4}
      </p>
    </div>
  );
};

export default React.memo(MobileHome);
