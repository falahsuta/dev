import React from "react";
import "./../../../style/Scroll.css";

const MobileScrollUp = (props) => {
  return (
    <div
      className="m-scrollUp vert-move"
      style={{
        color: "rgba(61, 61, 61, 0.52)",
        userSelect: "none",
        ...(props.style || {}),
      }}
    >
      <div className="m-scrollUpIcons">
        <div className="m-scrollUpIconsInner">
          <i className="ri-arrow-up-s-line"></i>
          <i className="ri-arrow-drop-up-line"></i>
        </div>
      </div>
      <span className="m-scrollUpLabel">Scroll Up</span>
    </div>
  );
};

export default React.memo(MobileScrollUp);
