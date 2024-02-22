import React from "react";
import "../components/MyAccount.css";
import AddIcon from "@mui/icons-material/Add";

const CompanyProfile = () => {
  return (
    <div className="content_wrapper">
      <div className="createOpportunityContainer">
        <h1 className="headerContainer">Company Opportunity</h1>

        <div className="createOpportunity_bodyContainer">
          <div className="createOpportunity_text">
            <h2>Looks like you do not have any Opportunity postings.</h2>
            <h4>Select the option below to start creating your new posting.</h4>
          </div>
          <a href="/newOpportunity" onClick={() => console.log("kliknuo sam")}>
            <div className="createOpportunity">
              <AddIcon fontSize="large" />
              <h3>Create Opportunity</h3>
            </div>
          </a>
          <a href="#" onClick={() => console.log("kliknuo sam")}>
            <div className="createOpportunity">
              <AddIcon fontSize="large" />
              <h3>Create Internship</h3>
            </div>
          </a>
          <a href="#" onClick={() => console.log("kliknuo sam")}>
            <div className="createOpportunity">
              <AddIcon fontSize="large" />
              <h3>Create Event</h3>
            </div>
          </a>
          <a href="#" onClick={() => console.log("kliknuo sam")}>
            <div className="createOpportunity">
              <AddIcon fontSize="large" />
              <h3>Other Option</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
