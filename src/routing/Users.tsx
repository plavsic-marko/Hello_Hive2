import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Box,
  IconButton,
  InputBase,
} from "@mui/material";
import usersData from "../data/UsersData";
import "../components/Users.css";
import Pagination from "@mui/material/Pagination";
import SearchIcon from "@mui/icons-material/Search";

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

const Users = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="content_wrapper">
      <div className="companyProfileContainer">
        <h1 className="headerContainer">Users</h1>
        <div className="usersHeadContainer">
          <div className="button_Container">
            <Box
              sx={{
                display: "flex",
                width: 300,
                justifyContent: "space-between",
                border: 1,
                borderColor: "#12c2e9",
                borderRadius: 8,
              }}
            >
              <IconButton>
                <SearchIcon style={{ color: "#12c2e9" }} />
              </IconButton>
              <InputBase placeholder="Search (Title, location...)" />
            </Box>
            <Button
              variant="contained"
              onClick={() => console.log("kliknuo sam")}
              style={{
                marginRight: 32,
                borderRadius: 20,
                backgroundColor: "#12c2e9",
                textTransform: "none",
                fontWeight: 500,
              }}
            >
              Add New User
            </Button>
          </div>
        </div>
        <div className="user_table">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableCell sx={headRowStyle} align="center">
                  User Name
                </TableCell>
                <TableCell sx={headRowStyle} align="right">
                  Contact Information
                </TableCell>
                <TableCell sx={headRowStyle} align="right">
                  Company Email Domain
                </TableCell>
                <TableCell sx={headRowStyle} align="right">
                  User Type
                </TableCell>
                <TableCell sx={headRowStyle} align="right">
                  Addresse
                </TableCell>
                <TableCell sx={headRowStyle} align="right">
                  Permission
                </TableCell>
              </TableHead>
              <TableBody>
                {usersData.map((item) => (
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
                      {item.contactInfo} <br /> {item.phoneNumber}
                    </TableCell>
                    <TableCell sx={fieldText} align="right">
                      {item.companyEmail}
                    </TableCell>
                    <TableCell sx={statusTextLive} align="right">
                      {item.userType}
                    </TableCell>
                    <TableCell sx={fieldText} align="right">
                      {item.city} <br />
                      {item.address}
                    </TableCell>
                    <TableCell sx={fieldText} align="right">
                      {item.permission}
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

export default Users;
