import React from "react";
import MobileProjectsContent from "./MobileProjectsContent";

const MobileProjects = () => {
  return (
    <div className="m-page">
      <MobileProjectsContent />
    </div>
  );
};

export default React.memo(MobileProjects);
