import "../components/CompanyProfile.css";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { purple } from "@mui/material/colors";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CompanyProfileForm from "../routing/PrivacyPolicy";

const CompanyProfile = () => {
  const colorPurple = purple[900];

  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="content_wrapper">
        <div className="companyProfileContainer">
          <div className="headerCompanyProfile">
            <h1 className="headerContainer">Company Profile</h1>

            <div className="header_prvi">
              <h3 className="save">Save as Draft (0) |</h3>
              <h3 className="status">Active</h3>
              <FormControlLabel control={<Switch defaultChecked />} label="" />
            </div>
          </div>

          <div
            className={
              showForm
                ? "companyProfile_bodyContainer_open"
                : "companyProfile_bodyContainer"
            }
          >
            <div className="form_container">
              <div
                className={showForm ? "formHeadline" : "formHeadline_Closed"}
              >
                <div style={{ display: "flex", color: "darkblue" }}>
                  <button
                    className="button_cp"
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
            </div>
          </div>
          {showForm ? (
            <div className="form_container2">
              <CompanyProfileForm />
            </div>
          ) : null}
        </div>

        <div className="companyProfileContainer">
          <h1 className="companyProfileHeadline">Druga strana je u izradi</h1>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
