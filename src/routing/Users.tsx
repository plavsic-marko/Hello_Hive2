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
  Modal,
  Typography,
  Input,
} from "@mui/material";
import usersData from "../data/UsersData";
import "../components/Users.css";
import Pagination from "@mui/material/Pagination";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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

  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const ariaLabel = { "aria-label": "description" };

  const currencies = [
    {
      value: "Admin",
      label: "Admin",
    },
  ];

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
              onClick={handleOpen}
              style={{
                marginRight: 32,
                borderRadius: 20,
                backgroundColor: "#12c2e9",
                textTransform: "none",
                fontWeight: 500,
              }}
            >
              Open modal
            </Button>
            <Modal
              open={openModal}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="modal_box">
                <div className="header">
                  <h3>Add User</h3>
                  <h4>General Information</h4>
                  <div className="forma_div_prva">
                    <form className="prva_forma">
                      <TextField
                        required
                        id="standard-required"
                        label="First Name"
                        placeholder="Enter first name"
                        variant="standard"
                      />
                      <TextField
                        required
                        id="standard-required"
                        label="Last Name"
                        placeholder="Enter last name"
                        variant="standard"
                      />
                    </form>
                    <form className="druga_forma">
                      <TextField
                        required
                        id="standard-required"
                        label="Email"
                        placeholder="Enter users email"
                        variant="standard"
                      />
                      <TextField
                        required
                        id="standard-required"
                        label="Phone number"
                        placeholder="+1(555)000-000"
                        variant="standard"
                      />
                    </form>
                    <form className="treca_forma">
                      <TextField
                        required
                        id="standard-required"
                        label="Company Email Domain"
                        placeholder="Enter Company Email Domain"
                        variant="standard"
                      />
                      <TextField
                        id="standard-select-currency"
                        select
                        label="Type"
                        required
                        placeholder="Select user"
                        defaultValue="Select user"
                        variant="standard"
                        helperText="Select user"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </form>
                  </div>
                  <div className="forma_div_druga">
                    <h3>Permission</h3>
                    <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="view"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="view"
                          control={<Radio />}
                          label="View"
                        />{" "}
                        <p>User can view information on platform</p>
                        <FormControlLabel
                          value="edit"
                          control={<Radio />}
                          label="Edit"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="forma_div_treca">
                    <h3>Permission</h3>
                  </div>
                </div>
              </div>
            </Modal>
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
                    <TableCell sx={fieldTextName} scope="row" align="left">
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
