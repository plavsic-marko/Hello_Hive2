import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="app_wrapper">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
