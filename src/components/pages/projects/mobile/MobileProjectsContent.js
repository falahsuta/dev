import React from "react";
import ScrollHorizontal from "react-scroll-horizontal";

import MobileScrollUp from "../../../shared/mobile/MobileScrollUp";
import { data } from "../data-proj";
import MobilePortoCard from "./MobilePortoCard";

const MobileProjectsContent = () => {
  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <ScrollHorizontal>
        {data.map((element, index) => {
          const margin =
            index % 2 === 0
              ? index === 0
                ? "50px 35px"
                : "50px 45px"
              : "100px 45px";

          return (
            <div key={element.header} style={{ margin }}>
              <MobilePortoCard header={element.header} text={element.text} />
            </div>
          );
        })}
      </ScrollHorizontal>

      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <MobileScrollUp />
      </div>
    </div>
  );
};

export default React.memo(MobileProjectsContent);
