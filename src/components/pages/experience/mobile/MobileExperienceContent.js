import React, { useEffect, useRef } from "react";
import ScrollHorizontal from "react-scroll-horizontal";

import { data } from "../exp-data";
import MobileExpCard from "./MobileExpCard";
import MobileScrollUp from "../../../shared/mobile/MobileScrollUp";

const MobileExperienceContent = () => {
    const ref = useRef(null);

    useEffect(() => {
        const wrapper = ref.current;
        if (!wrapper) return;

        const scrollEl = wrapper.querySelector("div");
        if (!scrollEl) return;

        let startX = 0;

        const onTouchStart = (e) => {
            if (!e.touches?.length) return;
            startX = e.touches[0].clientX;
        };

        const onTouchMove = (e) => {
            if (!e.touches?.length) return;

            const nextX = e.touches[0].clientX;
            const dx = startX - nextX;
            startX = nextX;

            if (Math.abs(dx) < 2) return;

            e.preventDefault();

            scrollEl.dispatchEvent(
                new WheelEvent("wheel", {
                    deltaY: dx,
                    bubbles: true,
                    cancelable: true,
                })
            );
        };

        wrapper.addEventListener("touchstart", onTouchStart, { passive: true });
        wrapper.addEventListener("touchmove", onTouchMove, { passive: false });

        return () => {
            wrapper.removeEventListener("touchstart", onTouchStart);
            wrapper.removeEventListener("touchmove", onTouchMove);
        };
    }, []);

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
            <div ref={ref} className="exp-scroll-wrapper">
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
            </div>

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
