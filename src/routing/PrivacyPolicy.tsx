import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import CircleProgressBar from "../progress bar/CircleProgressBar";
import { useState } from "react";

const NewOpportunityPage = () => {
  const colorPurple = purple[900];
  const style_button_request = {
    backgroundColor: "#19bdea",
    height: "45px",
    borderRadius: "30px",
    paddingLeft: 30,
    fontSize: 16,
    fontWeight: 600,
    textTransform: "none" as const,
  };

  const [showForm, setShowForm] = useState(false);
  const [progress, setProgress] = useState(35);
  const [showAbout, setShowAbout] = useState(false);
  return (
    <div className="opportunityContainer">
      <div className="OpportunityContainerHeadline">
        <h1 className="companyProfileHeadline">
          <ArrowCircleLeftOutlinedIcon /> New Opportunity
        </h1>
        <CloseOutlinedIcon
          fontSize="large"
          style={{ margin: 15, marginRight: 30 }}
        />
      </div>
      <div className="workingStatus">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setProgress(progress + 10)}
        >
          Button
        </Button>
        <CircleProgressBar progress={progress} circleWidth="200" />
        <Button variant="contained" style={style_button_request}>
          Request Feedback{" "}
          <ArrowForwardIcon fontSize="large" style={{ margin: 9 }} />
        </Button>
      </div>
      <div className="bodySection">
        <div className="bodyLeftContainer">
          <div className="bodyLeftHeadline">
            <h2>Details</h2>
            <Button
              variant="outlined"
              style={{ borderRadius: 30, color: "purple", fontWeight: 600 }}
            >
              Show only required fields
            </Button>
          </div>

          <div>
            <div className={showAbout ? "toggleDeadlineO" : "toggleDeadlineC"}>
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                Deadline
              </Typography>
              <button
                className="buttonAboutUs"
                onClick={() => setShowAbout(!showAbout)}
              >
                <KeyboardArrowRightIcon
                  style={
                    showAbout
                      ? {
                          color: colorPurple,
                          transform: "rotate(90deg)",
                          transition: "0.3s",
                        }
                      : { color: colorPurple, transition: "0.3s" }
                  }
                  fontSize="large"
                />
              </button>
            </div>
            {showAbout ? (
              <div className="ContainerDeadline">
                <div className="deadline1"></div>
                <div className="deadline2"></div>
              </div>
            ) : null}
          </div>

          <div className="formContainerOutline">
            <div className={showForm ? "toggleDeadlineO" : "toggleDeadlineC"}>
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                Enter account administration information
              </Typography>
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
            </div>

            {/* FORM --------------------------------------------------------------------------- */}

            <div
              className={showForm ? "form_container" : "form_container_Closed"}
            ></div>
          </div>
        </div>

        <div className="bodyRightContainer">
          <h2 className="rightContainerHeadline">
            HelloHive Recruitment Company
          </h2>
          <div className="publicPreview">
            <p className="p_publicPrev">
              Public Preview: Profile Visibility Enhanced
            </p>
          </div>
          <div className="bannerCv">
            <div className="new">
              <div className="newBadge">New</div>
            </div>
            <div className="cvCaption">
              <h3>Junior Recruiter Position</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                facilis ut tempore culpa obcaecati eligendi at similique impedit
                quis doloribus, placeat ratione nemo nobis vero quas ex cumque,
                odit aliquid?
              </p>
            </div>
          </div>
          <div className="detailsBanner">
            <h1 className="DetailsBannerHeadline">Details</h1>
          </div>
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

          <div className="descriptionContainer">
            <h3>Job Description</h3>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              consequuntur sint nemo consequatur porro, dolore perspiciatis
              libero quas temporibus sit, vel itaque quod at praesentium soluta,
              cum iusto nulla blanditiis odio. Alias, aut. Vero, expedita, alias
              nemo ab, commodi placeat fugit iusto quam ipsum mollitia cum
              inventore sit labore est sed natus dolore explicabo. Ea
              voluptatibus quaerat tempore voluptatem quos amet dolor iusto
              praesentium, eligendi itaque obcaecati quo aliquid iste!
            </p>
            <h3>Contition</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium vel eveniet vero nam fuga exercitationem corporis quis
              adipisci! Laborum eligendi quo quaerat. Porro quidem odio quasi.
              Nobis culpa repellendus ducimus alias nemo. Pariatur, et earum.
              Dicta tempora, asperiores quibusdam nam ducimus aut libero
              accusamus quo atque. Quas quis fuga quasi sint id amet laborum
              voluptatibus non reprehenderit natus tenetur adipisci voluptates
              harum saepe repudiandae cumque, deserunt nam, aliquid possimus in.
            </p>
          </div>

          <div className="rightPageButtons">
            <Button style={{ marginRight: 10 }}>Save as Draft</Button>
            <Button variant="contained" style={style_button_request}>
              Post Opportunity
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOpportunityPage;
