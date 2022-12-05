import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Brightness3OutlinedIcon from "@mui/icons-material/Brightness3Outlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

import "./navBar.scss";
import { AuthContext } from "../../context/authContext";
import { makeRequest } from "../../axios";

const Navbar = (props) => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  const logoutHandle = async () => {
    await makeRequest.post("/auth/logout");
    localStorage.setItem("user", "null");
    navigate("/login");
  };
  

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
        <LogoutOutlinedIcon style={{cursor:"pointer"}} onClick={() => setLogout(!logout)} />
        {logout && <button onClick={logoutHandle}>Logout</button>}
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />

        <div className="user">
          <img src={"/upload/" + currentUser?.profilePic} alt="profile-img" />
          <Link
            to={`/profile/${currentUser.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span>{currentUser.name}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
