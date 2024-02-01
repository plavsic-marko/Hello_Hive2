import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Required"),
});

export const userSchema = yup.object().shape({
  // companyLogo: yup.object(),
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  phoneNumber: yup.number().required("Required"),
  companyEmail: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
  state: yup.string().required("Required"),
  city: yup.string().required("Required"),
  address: yup.string().required("Required"),
  zipCode: yup.number().required("Required"),
});
