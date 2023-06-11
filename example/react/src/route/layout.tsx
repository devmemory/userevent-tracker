import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "src/components/Nav";
import { storeUtil, tracker } from "../../../../lib/dist";

const Layout = () => {
  useEffect(() => {
    // you can set show console or no. default is hiding
    // you can set uuid to track an user.
    tracker({showConsole: true, customUUID: undefined})

    return () => {
      storeUtil.getTrackData()
    }
  }, []);

  return (
    <main className="main_app">
      <Nav />
      <Outlet />
    </main>
  );
};

export default Layout;
