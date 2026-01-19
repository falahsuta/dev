import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectNav } from "../../../actions";

const MobileSidebar = () => {
  const dispatch = useDispatch();
  const nav = useSelector((state) => state.nav);
  const menus = useMemo(
    () => ["Home", "Experience", "Projects", "About Me"],
    []
  );

  return (
    <div className="m-menuGrid">
      {menus.map((menu) => (
        <button
          key={menu}
          type="button"
          className={`m-menuItem ${nav === menu ? "is-selected" : ""}`}
          onClick={() => {
            dispatch(selectNav(menu));
          }}
        >
          {menu}
        </button>
      ))}
    </div>
  );
};

export default React.memo(MobileSidebar);
