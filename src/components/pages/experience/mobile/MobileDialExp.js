import React from "react";

import DialExp from "../DialExp";

const MobileDialExp = (props) => {
  return <DialExp header={props.header} data={props.data} />;
};

export default React.memo(MobileDialExp);
