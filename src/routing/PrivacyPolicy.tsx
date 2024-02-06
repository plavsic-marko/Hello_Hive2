import React from "react";
import { Form } from "react-router-dom";
import "../components/PrivacyPolicy.css";
import { FormikErrors, useFormik } from "formik";
import { companyProfileSchema } from "../schemas";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { colors } from "@mui/material";

const colorPurple = colors.purple[900];
const colorRed = colors.pink[500];
interface MyValues {
  companyName: string;
  companyNumber: string;
  companyEmailDomain: string;
  companyDescription: string;
  companyType: string;
  headquartersLocation: string;
  numberEmployees: string;
}

const onSubmit = async (values: any, actions: any) => {
  console.log("to je to"), console.log(values), console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const CompanyProfileForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      companyName: "",
      companyNumber: "",
      companyEmailDomain: "",
      companyDescription: "",
      companyType: "",
      headquartersLocation: "",
      numberEmployees: "",

      industries: "",
    },
    onSubmit,
    validationSchema: companyProfileSchema,

    validate: (values: MyValues) => {
      const errors: FormikErrors<MyValues> = {};
    },
  });

  return (
    <form className="formaPrva" onClick={handleSubmit}>
      <label htmlFor="companyName">
        {" "}
        {errors.companyName && touched.companyName ? (
          <ErrorOutlineIcon style={{ marginRight: 6, color: colorRed }} />
        ) : (
          <CheckCircleIcon style={{ marginRight: 6, color: colorPurple }} />
        )}{" "}
        Company Name
      </label>
      <input
        id="companyName"
        type="text"
        name="companyName"
        value={values.companyName}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.companyName && touched.companyName
            ? "input-error"
            : "input-form"
        }
      ></input>
      {errors.companyName && touched.companyName && (
        <p className="error">{errors.companyName}</p>
      )}

      <label htmlFor="companyNumber">
        {errors.companyNumber && touched.companyNumber ? (
          <ErrorOutlineIcon style={{ marginRight: 6, color: colorRed }} />
        ) : (
          <CheckCircleIcon style={{ marginRight: 6, color: colorPurple }} />
        )}
        Company Number
      </label>
      <input
        id="companyNumber"
        type="number"
        name="companyNumber"
        value={values.companyNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.companyNumber && touched.companyNumber
            ? "input-error"
            : "input-form"
        }
      ></input>
      {errors.companyNumber && touched.companyNumber && (
        <p className="error">{errors.companyNumber}</p>
      )}

      <label htmlFor="companyEmailDomain">
        {errors.companyEmailDomain && touched.companyEmailDomain ? (
          <ErrorOutlineIcon style={{ marginRight: 6, color: colorRed }} />
        ) : (
          <CheckCircleIcon style={{ marginRight: 6, color: colorPurple }} />
        )}
        Company Email Domain
      </label>
      <input
        id="companyEmailDomain"
        type="email"
        name="companyEmailDomain"
        value={values.companyEmailDomain}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.companyEmailDomain && touched.companyEmailDomain
            ? "input-error"
            : "input-form"
        }
      ></input>
      {errors.companyEmailDomain && touched.companyEmailDomain && (
        <p className="error">{errors.companyEmailDomain}</p>
      )}

      <label htmlFor="companyDescription">
        {errors.companyDescription && touched.companyDescription ? (
          <ErrorOutlineIcon style={{ marginRight: 6, color: colorRed }} />
        ) : (
          <CheckCircleIcon style={{ marginRight: 6, color: colorPurple }} />
        )}
        Company Description
      </label>
      <input
        id="companyDescription"
        type="text"
        name="companyDescription"
        value={values.companyDescription}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.companyDescription && touched.companyDescription
            ? "input-error"
            : "input-form"
        }
      ></input>
      {errors.companyDescription && touched.companyDescription && (
        <p className="error">{errors.companyDescription}</p>
      )}

      <label htmlFor="companyType">
        {errors.companyNumber && touched.companyNumber ? (
          <ErrorOutlineIcon style={{ marginRight: 6, color: colorRed }} />
        ) : (
          <CheckCircleIcon style={{ marginRight: 6, color: colorPurple }} />
        )}
        Company Type
      </label>
      <input
        id="companyType"
        type="text"
        name="companyType"
        value={values.companyType}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.companyType && touched.companyType
            ? "input-error"
            : "input-form"
        }
      ></input>
      {errors.companyType && touched.companyType && (
        <p className="error">{errors.companyType}</p>
      )}
      <label htmlFor="headquartersLocation">
        {errors.headquartersLocation && touched.headquartersLocation ? (
          <ErrorOutlineIcon style={{ marginRight: 6, color: colorRed }} />
        ) : (
          <CheckCircleIcon style={{ marginRight: 6, color: colorPurple }} />
        )}
        Headquarters Location
      </label>
      <input
        id="headquartersLocation"
        type="text"
        name="headquartersLocation"
        value={values.headquartersLocation}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.headquartersLocation && touched.headquartersLocation
            ? "input-error"
            : "input-form"
        }
      ></input>
      {errors.headquartersLocation && touched.headquartersLocation && (
        <p className="error">{errors.headquartersLocation}</p>
      )}
      <label htmlFor="numberEmployees">
        {errors.numberEmployees && touched.numberEmployees ? (
          <ErrorOutlineIcon style={{ marginRight: 6, color: colorRed }} />
        ) : (
          <CheckCircleIcon style={{ marginRight: 6, color: colorPurple }} />
        )}
        Number of employees
      </label>
      <input
        id="numberEmployees"
        type="number"
        name="numberEmployees"
        value={values.numberEmployees}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.numberEmployees && touched.numberEmployees
            ? "input-error"
            : "input-form"
        }
      ></input>
      {errors.numberEmployees && touched.numberEmployees && (
        <p className="error">{errors.numberEmployees}</p>
      )}

      <label htmlFor="industries">
        {errors.industries && touched.industries ? (
          <ErrorOutlineIcon style={{ marginRight: 6, color: colorRed }} />
        ) : (
          <CheckCircleIcon style={{ marginRight: 6, color: colorPurple }} />
        )}
        Industries
      </label>
      <input
        id="industries"
        type="text"
        name="industries"
        value={values.industries}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.industries && touched.industries ? "input-error" : "input-form"
        }
      ></input>
      {errors.industries && touched.industries && (
        <p className="error">{errors.industries}</p>
      )}

      <button className="dugme_forma" type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default CompanyProfileForm;
