import React from "react";
import Logo from "./Logo";

const GridOfLogo = () => {
  return (
    <div
      style={{
        marginTop: "150px",
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
      <div style={{ marginLeft: -10, marginRight: 0 }}>
        <Logo text="Github" linkto="https://github.com/falahsuta" />
      </div>
      <div style={{ marginLeft: 0, marginRight: 15 }}>
        <Logo
          text="Linkedin"
          linkto="https://www.linkedin.com/in/falah-sutawindaya/"
        />
      </div>
      <div style={{ marginLeft: 0, marginRight: 5 }}>
        <Logo text="Instagram" linkto="https://instagram.com/falahsutawindaya" />
      </div>
      <div style={{ marginLeft: 30, marginRight: 0 }}>
        <Logo text="Resume" linkto="https://instagram.com/falahsutawindaya" rep="Resume/CV"/>
      </div>
    </div>
  );
};

export default React.memo(GridOfLogo);
