import React, { useEffect } from "react";
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

    useEffect(() => {
        if (!nav) {
            dispatch(selectNav("Home"));
        }
    }, [dispatch, nav]);

    return (
        <div className="m-root">
            <div className="m-shell">
                <div className="m-content">
                    {nav === "Home" && <MobileHome />}
                    {nav === "Experience" && <MobileExperience />}
                    {nav === "Projects" && <MobileProjects />}
                    {nav === "About Me" && <MobileAbout />}
                </div>
                <div className="m-nav">
                    <MobileSidebar />
                </div>
            </div>
        </div>
    );
};

export default React.memo(MobileApp);