import React from "react";
import ScrollHorizontal from "react-scroll-horizontal";

import { data } from "./exp-data";
import ExpCard from "./ExpCard";
import ScrollUp from "./ScrollUp";

const Experience = () => {
  return (
    <>
      <div
        style={{
          height: `22.7em`,
          width: "530px",
          borderRadius: "20px",
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
              <div style={{ margin }}>
                <ExpCard
                  key={element.header}
                  header={element.header}
                  role={element.role}
                  tenure={element.tenure}
                  text={element.text}
                  logo={element.logo}
                />
              </div>
            );
          })}
        </ScrollHorizontal>
        <div style={{ marginLeft: "220px" }}>
          <ScrollUp />
        </div>
      </div>
    </>
  );
};

export default React.memo(Experience);
