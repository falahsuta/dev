import React from "react";

import DialProj from "../DialProj";

const MobileDialProj = (props) => {
  return <DialProj header={props.header} data={props.data} />;
};

export default React.memo(MobileDialProj);

