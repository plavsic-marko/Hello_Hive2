import React from "react";
import "../components/CompanyProfile.css";
import AddIcon from "@mui/icons-material/Add";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import { IconButton } from "@mui/material";

const CompanyProfile = () => {
  return (
    <>
      <div className="content_wrapper">
        <div className="companyProfileContainer">
          <div className="headerCompanyProfile">
            <h1 className="headerContainer">Company Profile</h1>
            <h3 className="headerContainer2">Save as Draft (0) |</h3>
            <h3 className="status">Active</h3>
          </div>
          <div className="companyProfile_bodyContainer"></div>
        </div>
      </div>

      <div className="content_wrapper">
        <div className="companyProfileContainer">
          <h1 className="companyProfileHeadline">Druga strana je u izradi</h1>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
