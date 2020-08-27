import React from "react";
import ScrollHorizontal from "react-scroll-horizontal";
import PortoCard from "./PortoCard";
import ScrollUp from "./ScrollUp";

export default () => {
  const data = [
    {
      header: "Disscuss",
      text: "Reddit wannabe but with some preferences style of mine.",
    },
    {
      header: "Portofolio",
      text: "A Personal website for showcase project i've done in past.",
    },
    {
      header: "Info Extractor",
      text:
        "Web based app to extract relevant information given text/articles input.",
    },
    {
      header: "15-Puzzle Solver",
      text:
        "CLI based visualizer for solving 15-puzzle using branch and bound.",
    },
  ];

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
                <PortoCard header={element.header} text={element.text} />
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
