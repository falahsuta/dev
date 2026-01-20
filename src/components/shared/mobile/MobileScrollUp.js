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
          <i className="ri-arrow-right-s-line"></i>
          <i className="ri-arrow-drop-right-line"></i>
        </div>
      </div>
      <span className="m-scrollUpLabel">Swipe Right</span>
    </div>
  );
};

export default React.memo(MobileScrollUp);
