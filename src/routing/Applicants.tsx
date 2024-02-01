import { Link } from "react-router-dom";
import "../components/Applicants.css";
import { useFormik } from "formik";

const Aplicants = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

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

        <label htmlFor="channel" className="email">
          Channel
        </label>
        <input
          type="text"
          id="channel"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Aplicants;
