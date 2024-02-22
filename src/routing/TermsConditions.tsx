import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const TermsConditions = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
  }, []);

  const deleteUser = (user: User) => {
    setUsers(users.filter((u) => u.id !== user.id));

    axios.delete("https://jsonplaceholder.typicode.com/users" + user.id);
  };
  /*
  const addUser = () => {
    const [newUser, setNewUser] = useState({ id: 0, name: "" });
    setUsers([newUser, ...users]);
    axios
      .post("https://jsonplaceholder.typicode.com/users" + newUser)
      .then((res) => setUsers([res.data, ...users]));
  };*/

  const addUser = () => {
    const newUser = { id: 0, name: "Marko" };
    setUsers([newUser, ...users]);
    axios
      .post("https://jsonplaceholder.typicode.com/users" + newUser)
      .then((res) => setUsers([res.data, ...users]));
  };

  return (
    <>
      <div>
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

          <button type="submit" onClick={addUser}>
            Add
          </button>
        </form>
      </div>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}{" "}
            <button
              className="btn btn-outline"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TermsConditions;
