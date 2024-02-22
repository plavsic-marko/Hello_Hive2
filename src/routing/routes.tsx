import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import CreateCompanyProfile from "./CreateCompanyProfile";
import Users from "./Users";
import Layout from "../Layout";
import Posting from "./Postings";
import MyAccount from "./MyAccount";
import Applicants from "./Applicants";
import CreateOpportunity from "../components/CreateOpportunity";
import PrivatePolicy from "./PrivacyPolicy";
import SignOut from "./SignOut";
import TermsConditions from "./TermsConditions";
import CompanyProfile from "../components/CompanyProfile";
import NewOpportunity from "../components/NewOpportunity";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "createCompanyProfile", element: <CreateCompanyProfile /> },
      { path: "users", element: <Users /> },
      { path: "posting", element: <Posting /> },
      { path: "myAccount", element: <MyAccount /> },
      { path: "applicants", element: <Applicants /> },
      { path: "pajaPatak", element: <CreateOpportunity /> },
      { path: "privatePolicy", element: <PrivatePolicy /> },
      { path: "signOut", element: <SignOut /> },
      { path: "termsConditions", element: <TermsConditions /> },
      { path: "companyProfile", element: <CompanyProfile /> },
      { path: "newOpportunity", element: <NewOpportunity /> },
    ],
  },
]);

export default router;
