import React, { useEffect, useMemo, useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import anime from "animejs";
import { useDispatch, useSelector } from "react-redux";

import { selectNav } from "./actions";
import MobileSidebar from "./components/shared/mobile/MobileSidebar";
import MobileHome from "./components/pages/home/mobile/MobileHome";
import MobileExperience from "./components/pages/experience/mobile/MobileExperience";
import MobileProjects from "./components/pages/projects/mobile/MobileProjects";
import MobileAbout from "./components/pages/about/mobile/MobileAbout";
import "./style/mobile/mobile.css";

const MobileApp = () => {
    const dispatch = useDispatch();
    const nav = useSelector((state) => state.nav);

    const pageRef = useRef(null);

    const navKey = useMemo(() => {
        if (!nav) return "Home";
        if (nav === "About Me") return "About Me";
        if (nav === "Experience") return "Experience";
        if (nav === "Projects") return "Projects";
        return "Home";
    }, [nav]);

    useEffect(() => {
        if (!nav) {
            dispatch(selectNav("Home"));
        }
    }, [dispatch, nav]);

    useEffect(() => {
        if (navKey !== "Home") return;

        const root = pageRef.current;
        if (!root) return;

        const nodes = root.querySelectorAll("[data-anime-title]");
        nodes.forEach((node) => {
            const text = (node.textContent || "").trim();
            if (!text) return;

            node.innerHTML = text.replace(/\S/g, "<span class='m-letter'>$&</span>");
        });

        const subtitle = root.querySelector("[data-anime-subtitle]");
        if (subtitle) {
            const text = (subtitle.textContent || "").trim();
            if (text) {
                subtitle.innerHTML = text.replace(/\S/g, "<span class='m-lettera'>$&</span>");
            }
        }

        anime.remove([".m-letter", ".m-lettera"]);
        anime({
            targets: ".m-letter",
            rotateY: [-90, 0],
            duration: 4800,
            delay: (el, i) => 45 * i,
        });

        anime({
            targets: ".ml12 .m-lettera",
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 10 * (i + 1),
        });
    }, [navKey]);

    return (
        <div className="m-root">
            <div className="m-shell">
                <div className="m-content">
                    <SwitchTransition mode="out-in">
                        <CSSTransition
                            key={navKey}
                            nodeRef={pageRef}
                            timeout={650}
                            classNames="m-page"
                            unmountOnExit
                        >
                            <div ref={pageRef}>
                                {navKey === "Home" && <MobileHome />}
                                {navKey === "Experience" && <MobileExperience />}
                                {navKey === "Projects" && <MobileProjects />}
                                {navKey === "About Me" && <MobileAbout />}
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
                <div className="m-nav">
                    <MobileSidebar />
                </div>
            </div>
        </div>
    );
};

export default React.memo(MobileApp);