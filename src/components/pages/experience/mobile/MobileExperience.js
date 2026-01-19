import React from "react";
import MobileExperienceContent from "./MobileExperienceContent";

const MobileExperience = () => {
  return (
    <div className="m-page">
      <MobileExperienceContent />
    </div>
  );
};

export default React.memo(MobileExperience);
