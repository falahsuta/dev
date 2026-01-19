import React from "react";
import ScrollHorizontal from "react-scroll-horizontal";

import { data } from "../exp-data";
import MobileExpCard from "./MobileExpCard";
import MobileScrollUp from "../../../shared/mobile/MobileScrollUp";

const MobileExperienceContent = () => {
    return (
        <div
            style={{
                height: "80vh",
                width: "100%",
                position: "relative", // anchor
                borderRadius: "20px",
                overflow: "hidden",
            }}
        >
            {/* Horizontal scroll layer */}
            <ScrollHorizontal>
                {data.map((element, index) => {
                    const margin =
                        index % 2 === 0
                            ? index === 0
                                ? "50px 15px"
                                : "50px 15px"
                            : "100px 25px";

                    return (
                        <div key={element.header} style={{ margin }}>
                            <MobileExpCard {...element} />
                        </div>
                    );
                })}
            </ScrollHorizontal>

            {/* Overlay pinned to bottom */}
            <div
                style={{
                    position: "absolute",
                    bottom: "16px",
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "center",
                    pointerEvents: "none", // optional
                }}
            >
                <MobileScrollUp />
            </div>
        </div>
    );
};


export default React.memo(MobileExperienceContent);

