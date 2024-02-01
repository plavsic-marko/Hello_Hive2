import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { purple } from "@mui/material/colors";
import { useState } from "react";
import "../components/TermsConditions.css";

const CompanyProfile = () => {
  const colorPurple = purple[900];

  const [showForm, setShowForm] = useState(false);
  const [progress, setProgress] = useState(35);

  return (
    <>
      <div className="companyProfileContainer2">
        <div className="companyProfileContainerHeadline">
          <h1 className="companyProfileHeadline">Company Profile</h1>
          <div className="headlineWrapper">
            <h4 className="companyProfileHeadline2">Save as Draft (0) |</h4>
            <h5 className="toggleStatus">Active</h5>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider" />
            </label>
          </div>
        </div>
        <div className="workingStatus">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setProgress(progress + 10)}
          >
            Button
          </Button>
        </div>
        <div className="formContainerOutline">
          <div className="myData_container">
            <div className="myData">
              <div
                className={showForm ? "formHeadline" : "formHeadline_Closed"}
              >
                <div style={{ display: "flex", color: "darkblue" }}>
                  <button
                    className="buttonAboutUs"
                    onClick={() => setShowForm(!showForm)}
                  >
                    <KeyboardArrowRightIcon
                      style={
                        showForm
                          ? {
                              color: colorPurple,
                              transform: "rotate(90deg)",
                              transition: "0.3s",
                            }
                          : {
                              color: colorPurple,
                              transition: "0.3s",
                            }
                      }
                      fontSize="large"
                    ></KeyboardArrowRightIcon>
                  </button>
                  <Typography variant="h6" marginTop={1}>
                    Enter account administration information
                  </Typography>
                </div>
              </div>

              {/* FORM --------------------------------------------------------------------------- */}

              <div
                className={
                  showForm ? "form_container" : "form_container_Closed"
                }
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/**************RIGHT PAGE ************/}

      <div className="companyProfileContainer3">
        <h1 className="companyProfileHeadline">
          HelloHive Recruitment Company
        </h1>
        <div className="publicPreview">
          <p>Public Preview: Profile Visibility Enhanced</p>
        </div>
        <h1 className="companyProfileHeadline">Company Informartion</h1>
        <div className="hhBanner">
          <div className="new">
            <div className="newBadge">New</div>
          </div>
          <div className="hhBannerInfo">
            <h3 className="bannerText">HelloHive Recruitment Company</h3>
            <div className="bannerEmail">
              <h4 className="bannerText">Email</h4>
              <p className="bannerText">HelloHive@jc.com</p>
            </div>
            <div className="bannerPhone">
              <h4 className="bannerText">Phone</h4>
              <p className="bannerText">(239)555-0108</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
