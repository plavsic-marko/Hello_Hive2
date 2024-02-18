import { Link, Navigate } from "react-router-dom";
import "../components/Applicants.css";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Aplicants = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });
  /* const addUser = () => {
    const newUser = { name: "", email: "" };
  };
*/
  const [inputData, setInputData] = useState({ name: "", email: "" });

  const navigate = useNavigate();

  axios
    .post("https://jsonplaceholder.typicode.com/users", inputData)
    .then((res) => {
      alert("Data add Successfully");
      navigate("/TermsConditions");
    })
    .catch((err) => console.log(err));

  //console.log("Form values", formik.values);
  return (
    <div className="start">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email" className="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Aplicants;
