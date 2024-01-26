import {
  Pagination,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import CreateIcon from "@mui/icons-material/Create";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Link } from "react-router-dom";
import columnsData from "../data/OpprotunitiesData";
import { useState } from "react";

const headRowStyle = {
  color: "#12c2e9",
  fontWeight: 600,
  borderBottom: "1px solid #00b8d4",
};

const fieldTextName = {
  color: "#4A3291",
  fontWeight: 550,
  borderBottom: "1px solid #00b8d4",
};

const fieldText = {
  color: "#4A3291",
  fontWeight: 400,
  borderBottom: "1px solid #00b8d4",
};

const statusTextLive = {
  color: "#00B27A",
  borderColor: "#12c2e9",
};

const buttonStyle = {
  backgroundColor: "#12c2e9",
  borderRadius: 20,
  marginRight: 2,
  textTransform: "none",
};

const Postings = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="content_wrapper">
      <div className="createOpportunityContainer">
        <div className="headLine_container">
          <h1 className="headerContainer">Opportunities</h1>
          <div className="button_container">
            <Button
              variant="outlined"
              onClick={() => console.log("kliknuo sam")}
              style={{
                marginRight: 22,
                borderRadius: 20,
                borderColor: "#12c2e9",
                color: "#4A3291",
                fontWeight: 600,
                textTransform: "none",
              }}
            >
              Export
            </Button>

            <Button
              variant="contained"
              onClick={() => console.log("kliknuo sam")}
              style={{
                marginRight: 22,
                borderRadius: 30,
                textTransform: "none",
                backgroundColor: "#12c2e9",
                fontWeight: 500,
              }}
            >
              Add New Opportunity
            </Button>
          </div>
        </div>
        <div className="user_table">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableCell sx={headRowStyle} align="left">
                  Opportunity Title
                </TableCell>
                <TableCell sx={headRowStyle} align="right">
                  Type
                </TableCell>
                <TableCell sx={headRowStyle} align="right">
                  Applicants
                </TableCell>
                <TableCell sx={headRowStyle} align="right">
                  Status
                </TableCell>
                <TableCell sx={headRowStyle} align="right">
                  Location
                </TableCell>
                <TableCell sx={headRowStyle} align="right">
                  Deadline
                </TableCell>
                <TableCell>
                  <a href="#">
                    <FilterListIcon
                      fontSize="large"
                      style={{ color: "black" }}
                    />
                  </a>
                </TableCell>
              </TableHead>
              <TableBody>
                {columnsData.slice(0, 5).map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell sx={fieldTextName} scope="row" align="center">
                      <div className="nameContainer">
                        <div className="title"></div>
                        {item.name}
                      </div>
                    </TableCell>
                    <TableCell sx={fieldText} align="right">
                      {item.Type}
                    </TableCell>
                    <TableCell sx={fieldText} align="right">
                      {item.Applicants}
                    </TableCell>
                    <TableCell sx={fieldText} align="right">
                      {item.Status}
                    </TableCell>
                    <TableCell sx={statusTextLive} align="right">
                      {item.Location}
                    </TableCell>
                    <TableCell sx={fieldText} align="right">
                      {item.Deadline}
                    </TableCell>
                    <TableCell sx={fieldText} align="right">
                      <div className="buttonCellContainer">
                        <Button sx={buttonStyle} variant="contained">
                          View Applicants
                        </Button>
                        <a href="#">
                          <CreateIcon
                            color="disabled"
                            sx={{
                              border: "2px solid #b5b3b3",
                              borderRadius: 20,
                              padding: 0.5,
                            }}
                          />
                        </a>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="pagination_table">
            <Pagination
              size="large"
              variant="outlined"
              color="primary"
              count={10}
              page={page}
              onChange={(event, newPage) => setPage(newPage)}
              shape="rounded"
              hidePrevButton
              hideNextButton
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postings;
