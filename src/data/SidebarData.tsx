import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import MarkChatReadOutlinedIcon from "@mui/icons-material/MarkChatReadOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

const sidebarData = [
  {
    id: 1,
    title: "Home",
    icon: <GridViewIcon></GridViewIcon>,
    link: "/home",
  },
  {
    id: 2,
    title: "Company Profile",
    icon: <PersonIcon></PersonIcon>,
    link: "/FormData",
  },
  {
    id: 3,
    title: "Postings",
    icon: <WorkOutlineOutlinedIcon />,
    link: "/Opp",
  },
  {
    id: 4,
    title: "Applicants",
    icon: <GradingOutlinedIcon />,
    link: "/home",
  },

  {
    id: 5,
    title: "Users",
    icon: <AccountCircleOutlinedIcon />,
    link: "/Acc",
  },
  {
    id: 6,
    title: "MyAccount",
    icon: <ManageAccountsOutlinedIcon></ManageAccountsOutlinedIcon>,
    link: "/Acc",
  },
  {
    id: 7,
    title: "Contact Us",
    icon: <MarkChatReadOutlinedIcon />,
    link: "/Acc",
  },
  {
    id: 8,
    title: "Privacy Policy",
    icon: <VerifiedUserOutlinedIcon></VerifiedUserOutlinedIcon>,
    link: "/Acc",
  },
  {
    id: 9,
    title: "Terms & Conditions",
    icon: <MenuBookOutlinedIcon></MenuBookOutlinedIcon>,
    link: "/Acc",
  },
];

export default sidebarData;
