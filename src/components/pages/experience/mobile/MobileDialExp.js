import React from "react";

import MobileDialExpContent from "./MobileDialExpContent";

const MobileDialExp = (props) => {
  return <MobileDialExpContent header={props.header} data={props.data} />;
};

export default React.memo(MobileDialExp);
