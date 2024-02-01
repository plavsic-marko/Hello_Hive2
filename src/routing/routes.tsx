import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import CompanyProfile from "./CompanyProfile";
import Users from "./Users";
import Layout from "../Layout";
import Posting from "./Postings";
import MyAccount from "./MyAccount";
import Applicants from "./Applicants";
import CreateOpportunity from "../components/CreateOpportunity";
import PrivatePolicy from "./PrivacyPolicy";
import SignOut from "./SignOut";
import TermsConditions from "./TermsConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "companyProfile", element: <CompanyProfile /> },
      { path: "users", element: <Users /> },
      { path: "posting", element: <Posting /> },
      { path: "myAccount", element: <MyAccount /> },
      { path: "applicants", element: <Applicants /> },
      { path: "pajaPatak", element: <CreateOpportunity /> },
      { path: "privatePolicy", element: <PrivatePolicy /> },
      { path: "signOut", element: <SignOut /> },
      { path: "termsConditions", element: <TermsConditions /> },
    ],
  },
]);

export default router;
