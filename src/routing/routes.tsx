import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import CompanyProfile from "./CompanyProfile";
import Users from "./Users";
import Layout from "../Layout";
import Posting from "./Postings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "companyProfile", element: <CompanyProfile /> },
      { path: "users", element: <Users /> },
      { path: "posting", element: <Posting /> },
    ],
  },
]);

export default router;
