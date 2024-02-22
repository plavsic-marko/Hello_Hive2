import React, { useState } from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "../components/NewOpportunity.css";
import { Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { purple } from "@mui/material/colors";

const NewOpportunity = () => {
  const colorPurple = purple[900];

  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="content_wrapper">
        <div className="companyProfileContainer">
          <div className="novo2">
            <h1 className="headerContainer">
              <ArrowCircleLeftOutlinedIcon /> New Opportunity
            </h1>
            <CloseOutlinedIcon
              fontSize="large"
              style={{ margin: 15, marginRight: 30 }}
            />
          </div>
          <div
            className={
              showForm ? "Oppform_container_open" : "Oppform_container"
            }
          >
            <div className={showForm ? "formHeadline" : "formHeadline_Closed"}>
              <div style={{ display: "flex", color: "darkblue" }}>
                <button
                  className="dugmee"
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
                <Typography>Enter account administrator information</Typography>
              </div>
            </div>
          </div>
        </div>

        <div className="companyProfileContainer">
          <h1>Druga strana u izradi</h1>
        </div>
      </div>
    </>
  );
};

export default NewOpportunity;
