import React, { useState, useEffect } from "react";
import "../style/Scroll.css";

const Logo = (props) => {
  const [isShown, setIsShown] = useState(false);

  // On Hover
  const handleOpen = () => {
    setIsShown(true);
  };

  const handleClose = () => {
    if (!props.mobile) {
      setIsShown(false);
    }
  };

  useEffect(() => {
    if (props.mobile) {
      setIsShown(true);
    }
  }, []);

  return (
    <>
      <div
        className="vert-move1"
        style={{
          color: props.mobile
            ? "rgba(61, 61, 61, 0.62)"
            : isShown
            ? "rgba(61, 61, 61, 0.82)"
            : "rgba(61, 61, 61, 0.52)",
          userSelect: "none",
          width: "70px",
          height: "20px",
          cursor: "pointer",
          marginTop: "20px",
          marginLeft: props.text === "Linkedin" ? "-5px" : undefined,
        }}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onClick={() => window.open(props.linkto, "_blank")}
      >
        <div
          style={{
            fontSize: props.mobile ? "27px" : "23px",
            marginTop: props.text === "Linkedin" ? "-2px" : undefined,
            display: "inline-block",
          }}
        >
          <div>
            <i
              style={{
                display: "block",
                marginBottom: "-39px",
                cursor: "pointer",
              }}
              className={
                isShown
                  ? `ri-${props.text.toLowerCase()}-fill`
                  : `ri-${props.text.toLowerCase()}-line`
              }
            ></i>
          </div>
        </div>
        <span
          style={{
            fontSize: props.mobile ? "17px" : "14px",
            display: "inline-block",
            marginLeft: props.rep ? "4px" : "1px",
            marginTop: "4px",
            fontFamily: "Recursive",
            position: "absolute",
            cursor: "pointer",
          }}
        >
          {props.rep ? props.rep : props.text}
        </span>
      </div>
    </>
  );
};

export default React.memo(Logo);
