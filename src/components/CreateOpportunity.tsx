import React from "react";
import "../components/CompanyProfile.css";
import AddIcon from "@mui/icons-material/Add";

const CompanyProfile = () => {
  return (
    <div className="content_wrapper">
      <div className="companyProfileContainer">
        <h1 className="headerContainer">CompanyProfile</h1>

        <div className="companyProfile_bodyContainer">
          <div className="companyProfile_text">
            <h2>Looks like you do not have a Company Profile.</h2>
            <h3>
              {" "}
              Select the option below to start creating your new company.
            </h3>
          </div>
          <a href="#" onClick={() => console.log("kliknuo sam")}>
            <div className="createCompanyProfile">
              <AddIcon fontSize="large" />
              <h3>Create Company Profile</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;