import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RouteName } from "src/util/routeUtil";
import styles from "./navi.module.css";

const Nav = () => {
  const location = useLocation();

  const navi = useNavigate();

  const isSelected = (path: string) => {
    return location.pathname === path;
  };

  const routes = [
    { path: RouteName.main, name: "Main" },
    { path: RouteName.myPage, name: "My" },
    { path: RouteName.about, name: "About" },
  ];

  return (
    <div className={styles.div_nav}>
      <img src="/react.svg" alt="logo" onClick={() => navi(RouteName.main)} />
      <div>
        {routes.map((e, i) => {
          return (
            <button
              key={`navi_${i}`}
              onClick={() => navi(e.path)}
              data-selected={isSelected(e.path)}>
              {e.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
