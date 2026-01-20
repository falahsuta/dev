import React from "react";
import Logo from "./Logo";
import items from "./logo-content-link";

const styleByKey = {
  github: { marginLeft: -10, marginRight: 0 },
  linkedin: { marginLeft: 0, marginRight: 15 },
  instagram: { marginLeft: 0, marginRight: 5 },
  resume: { marginLeft: 30, marginRight: 0 },
};

const GridOfLogo = () => {
  return (
    <div
      style={{
        marginTop: "15px",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "18px",
        paddingRight: "32px",
        boxSizing: "border-box",
      }}
    >
      {items.map((item) => (
        <div key={item.key} style={styleByKey[item.key]}>
          <Logo
            text={item.text}
            linkto={item.href}
            rep={item.rep}
            iconClass={item.iconClass}
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(GridOfLogo);
