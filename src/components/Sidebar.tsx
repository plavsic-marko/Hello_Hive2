import React, { useState } from "react";
import "../components/Sidebar.css";
import { IconButton, Typography } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import sidebarData from "../data/SidebarData";
import { grey } from "@mui/material/colors";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(!openMenu);

  return (
    <div className={openMenu ? "sidebar" : "sidebar_close"}>
      <div className="bodyContainer">
        <div className="headerContainer">
          <IconButton onClick={handleOpenMenu}>
            <DensityMediumIcon></DensityMediumIcon>
          </IconButton>
          <Typography variant="h5" color={grey[100]} marginTop={0.5}>
            {openMenu ? "helloresume" : "hr"}
          </Typography>
        </div>
        <div
          className={openMenu ? "profileContainer" : "profileContainer_close"}
        >
          <img
            className={openMenu ? "profile_pic" : "profile_pic_close"}
            src="public\profilna.jpg"
            alt="avatar"
          ></img>
          <div className="profileContents">
            <Typography variant="body1">
              {openMenu ? "Marko Plavsic" : "MP"}
            </Typography>
          </div>
        </div>
        <div>
          <ul className="contentContainer">
            {sidebarData.map((item) => (
              <li className="sidebar-item" key={item.id}>
                <a className="a_sidebar" href={item.link}>
                  {item.icon}
                  <span className="item_title">
                    {openMenu ? item.title : null}
                  </span>
                </a>
                <div
                  className="on_hover"
                  style={openMenu ? { display: "none" } : { display: "flex" }}
                >
                  {openMenu ? null : item.title}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
