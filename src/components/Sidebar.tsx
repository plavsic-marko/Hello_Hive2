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
        <div>
          <ul className="list-group">
            {sidebarData.map((item) => (
              <li className="sidebar-item" key={item.id}>
                {item.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
