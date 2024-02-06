import React from "react";
import "../components/CreateCompanyProfile.css";
import AddIcon from "@mui/icons-material/Add";
import { Navigate } from "react-router-dom";

const CompanyProfile = () => {
  /*const handleButtonClick = () => {
    Navigate("/companyProfile");
  };*/

  /*const history = useHistory();

  const handleClick = () => {
    history.push("/companyProfile");
  };*/

  return (
    <div className="content_wrapper">
      <div className="companyProfileContainer">
        <h1 className="headerContainer">Company Profile</h1>

        <div className="companyProfile_bodyContainer2">
          <div className="companyProfile_text">
            <h2>Looks like you do not have a Company Profile.</h2>
            <h4>Select the option below to start creating your new company.</h4>
          </div>
          <a href="/companyProfile">
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
