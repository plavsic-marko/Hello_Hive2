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
import "../components/SignOut.css";
import Pagination from "@mui/material/Pagination";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { FormikErrors, useFormik } from "formik";
import { userSchema } from "../schemas";

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
  fontWeight: 400,
  borderBottom: "1px solid #00b8d4",
};

const statusTextLive = {
  color: "#00B27A",
  borderColor: "#12c2e9",
};

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  companyEmail: string;
  radioView: string;
  state: string;
  city: string;
  address: string;
  zipCode: string;
}
const onSubmit = async (values: any, actions: any) => {
  console.log("to je to!");
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Users = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      companyEmail: "",
      radioView: "",
      state: "",
      city: "",
      address: "",
      zipCode: "",
    },
    validationSchema: userSchema,
    onSubmit,

    validate: (values: MyFormValues) => {
      const errors: FormikErrors<MyFormValues> = {};
    },
  });

  console.log(errors);

  const [page, setPage] = useState(1);

  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(!openModal);

  const [openModal1, setOpenModal1] = useState(false);
  const toggleModal1 = () => setOpenModal1(!openModal1);

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
              onClick={toggleModal1}
              style={{
                marginRight: 32,
                borderRadius: 20,
                backgroundColor: "#12c2e9",
                textTransform: "none",
                fontWeight: 500,
              }}
            >
              User in table
            </Button>
            <Modal
              open={openModal1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              onClose={toggleModal1}
            >
              <form className="forma_1">
                <div className="modal_box2">
                  <div className="Icon_box">
                    <CheckIcon color="primary"></CheckIcon>
                    <div className="Icon_box2">
                      <IconButton
                        onClick={toggleModal1}
                        style={{ float: "right" }}
                      >
                        <CloseIcon></CloseIcon>
                      </IconButton>
                    </div>
                  </div>
                  <h2>User has been successfully added</h2>
                  <div className="tekst_box">
                    <Typography>
                      The user has been successfully added to the system, and is
                      now ready to access their account and explore the platform
                      features.
                    </Typography>
                  </div>
                </div>
              </form>
            </Modal>

            <Button
              variant="contained"
              onClick={toggleModal}
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

            <Modal
              open={openModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              onClose={toggleModal}
            >
              <form className="forma_1" onSubmit={handleSubmit}>
                <div className="modal_box">
                  <div className="header">
                    <h3>
                      Add User{" "}
                      <IconButton
                        onClick={toggleModal}
                        style={{ float: "right" }}
                      >
                        <CloseIcon></CloseIcon>
                      </IconButton>
                    </h3>

                    <br></br>
                    <h4>General Information</h4>

                    <div className="forma_div_prva">
                      <div className="prva_forma">
                        <div className="flexColumn">
                          <TextField
                            required
                            color="secondary"
                            id="firstName"
                            label="First Name"
                            placeholder="Enter first name"
                            variant="standard"
                            onChange={handleChange}
                            value={values.firstName}
                            onBlur={handleBlur}
                            className={
                              errors.firstName && touched.firstName
                                ? "input-error"
                                : ""
                            }
                          />
                          {errors.firstName && touched.firstName && (
                            <p className="error">{errors.firstName}</p>
                          )}
                        </div>
                        <div className="flexColumn">
                          <TextField
                            required
                            id="lastName"
                            label="Last Name"
                            placeholder="Enter last name"
                            variant="standard"
                            onChange={handleChange}
                            value={values.lastName}
                            onBlur={handleBlur}
                            className={
                              errors.lastName && touched.lastName
                                ? "input-error"
                                : ""
                            }
                          />
                          {errors.lastName && touched.lastName && (
                            <p className="error">{errors.lastName}</p>
                          )}
                        </div>
                      </div>
                      <div className="druga_forma">
                        <div className="flexColumn">
                          <TextField
                            required
                            id="email"
                            label="Email"
                            placeholder="Enter users email"
                            variant="standard"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            className={
                              errors.email && touched.email ? "input-error" : ""
                            }
                          />
                          {errors.email && touched.email && (
                            <p className="error">{errors.email}</p>
                          )}
                        </div>
                        <div className="flexColumn">
                          <TextField
                            required
                            id="phoneNumber"
                            label="Phone number"
                            placeholder="+1(555)000-000"
                            variant="standard"
                            onChange={handleChange}
                            value={values.phoneNumber}
                            onBlur={handleBlur}
                            className={
                              errors.phoneNumber && touched.phoneNumber
                                ? "input-error"
                                : ""
                            }
                          />
                          {errors.phoneNumber && touched.phoneNumber && (
                            <p className="error">{errors.phoneNumber}</p>
                          )}
                        </div>
                      </div>
                      <div className="treca_forma">
                        <div className="flexColumn">
                          <TextField
                            required
                            id="companyEmail"
                            label="Company Email Domain"
                            fullWidth
                            placeholder="Enter Company Email Domain"
                            variant="standard"
                            onChange={handleChange}
                            value={values.companyEmail}
                            onBlur={handleBlur}
                            className={
                              errors.companyEmail && touched.companyEmail
                                ? "input-error"
                                : ""
                            }
                          />
                          {errors.companyEmail && touched.companyEmail && (
                            <p className="error">{errors.companyEmail}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="forma_div_druga">
                      <h4>Permission</h4>

                      <FormLabel id="radioView"></FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="view"
                        name="radioView"
                        onChange={handleChange}
                        value={values.radioView}
                        onBlur={handleBlur}
                      >
                        <div className="radio_button1">
                          <FormControlLabel
                            className="radio1"
                            value="view"
                            control={<Radio />}
                            label="View"
                          />
                          <p className="paragraf_1">
                            (User can view information on the platform)
                          </p>
                        </div>
                        <div className="radio_button2">
                          <FormControlLabel
                            value="edit"
                            control={<Radio />}
                            label="Edit"
                          />
                          <p className="paragraf_1">
                            (User can view and create resums on the platform)
                          </p>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="forma_div_treca">
                      <h4>Adresse</h4>
                      <div className="forma_div_prva">
                        <div className="prva_forma">
                          <div className="flexColumn">
                            <TextField
                              required
                              id="state"
                              label="State"
                              placeholder="Select State"
                              variant="standard"
                              onChange={handleChange}
                              value={values.state}
                              onBlur={handleBlur}
                              className={
                                errors.state && touched.state
                                  ? "input-error"
                                  : ""
                              }
                            />
                            {errors.state && touched.state && (
                              <p className="error">{errors.state}</p>
                            )}
                          </div>
                          <div className="flexColumn">
                            <TextField
                              required
                              id="city"
                              label="City"
                              placeholder="Select city"
                              variant="standard"
                              onChange={handleChange}
                              value={values.city}
                              onBlur={handleBlur}
                              className={
                                errors.city && touched.city ? "input-error" : ""
                              }
                            />
                            {errors.city && touched.city && (
                              <p className="error">{errors.city}</p>
                            )}
                          </div>
                        </div>
                        <div className="druga_forma">
                          <div className="flexColumn">
                            <TextField
                              required
                              id="address"
                              label="Address line"
                              placeholder="Enter addresse"
                              variant="standard"
                              onChange={handleChange}
                              value={values.address}
                              onBlur={handleBlur}
                              className={
                                errors.address && touched.address
                                  ? "input-error"
                                  : ""
                              }
                            />
                            {errors.address && touched.address && (
                              <p className="error">{errors.address}</p>
                            )}
                          </div>
                          <div className="flexColumn">
                            <TextField
                              required
                              id="zipCode"
                              label="Zip code"
                              placeholder="Enter Zip code"
                              variant="standard"
                              onChange={handleChange}
                              value={values.zipCode}
                              onBlur={handleBlur}
                              className={
                                errors.zipCode && touched.zipCode
                                  ? "input-error"
                                  : ""
                              }
                            />
                            {errors.zipCode && touched.zipCode && (
                              <p className="error">{errors.zipCode}</p>
                            )}
                          </div>
                        </div>
                        <div className="button_modal">
                          <Button
                            variant="contained"
                            type="submit"
                            size="large"
                            style={{
                              borderRadius: 10,
                              backgroundColor: "GrayText",
                              textTransform: "none",
                              fontWeight: 500,
                              borderColor: "#12c2e9",
                            }}
                          >
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
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
                {usersData.slice(0, 5).map((item) => (
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
