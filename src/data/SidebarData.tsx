import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

const sidebarData = [
  {
    id: 1,
    title: "Home",
    icon: <GridViewIcon></GridViewIcon>,
    link: "/",
  },
  {
    id: 2,
    title: "Company Profile",
    icon: <PersonIcon></PersonIcon>,
    link: "/createCompanyProfile",
  },
  {
    id: 3,
    title: "Postings",
    icon: <WorkOutlineOutlinedIcon />,
    link: "/posting",
  },
  {
    id: 4,
    title: "Applicants",
    icon: <GradingOutlinedIcon />,
    link: "/applicants",
  },

  {
    id: 5,
    title: "Users",
    icon: <AccountCircleOutlinedIcon />,
    link: "/users",
  },
  {
    id: 6,
    title: "MyAccount",
    icon: <ManageAccountsOutlinedIcon></ManageAccountsOutlinedIcon>,
    link: "/myAccount",
  },

  {
    id: 7,
    title: "Privacy Policy",
    icon: <VerifiedUserOutlinedIcon></VerifiedUserOutlinedIcon>,
    link: "/privatePolicy",
  },
  {
    id: 8,
    title: "Terms & Conditions",
    icon: <MenuBookOutlinedIcon></MenuBookOutlinedIcon>,
    link: "/termsConditions",
  },
  {
    id: 9,
    title: "Sign Out",
    icon: <LogoutIcon />,
    link: "/signOut",
  },
];

export default sidebarData;
