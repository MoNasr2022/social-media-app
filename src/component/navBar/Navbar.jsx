import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Brightness3OutlinedIcon from "@mui/icons-material/Brightness3Outlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PersonOutlinedIcon from "@mui/icons-material/Person2Outlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

import "./navBar.scss";
import { AuthContext } from "../../context/authContext";

const Navbar = (props) => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Everyone Social</span>
        </Link>
        <Link to="/" className="link">
          <HomeOutlinedIcon />
        </Link>
        {!darkMode ? (
          <Brightness3OutlinedIcon
            onClick={toggle}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <WbSunnyOutlinedIcon onClick={toggle} style={{ cursor: "pointer" }} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src={currentUser?.profilePic} alt="profile-img" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
