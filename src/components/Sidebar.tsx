import React from "react";
import "../components/Sidebar.css";
import { Typography } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import sidebarData from "../data/SidebarData";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="body-section">
        <div className="header">
          <DensityMediumIcon />
          <Typography variant="h5">hello resume</Typography>
        </div>
        <div className="profile">
          <div className="profile_name">
            <Typography variant="body1">Marko Plavsic</Typography>
          </div>
        </div>
        <div>
          <ul className="list-group">
            {sidebarData.map((item) => (
              <li className="sidebar-item" key={item.id}>
                {item.icon}
                <span className="item_title">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
