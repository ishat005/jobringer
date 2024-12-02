import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import home from "../../images/home.png";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReplyIcon from "@mui/icons-material/Reply";
import MenuIcon from "@mui/icons-material/Menu";
import "./FooterNav.css";

const FooterNav = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="">
            <MenuIcon />
          </a>
        </li>
        <li>
          <LoginIcon style={{ position: "relative", top: "22px" }} />
          <p class="login">Login</p>
        </li>
        <li>
          <img
            src={home}
            alt=""
            width={20}
            height={20}
            style={{ position: "relative", top: "22px" }}
          />
          <p class="home">Home</p>
        </li>
        <li>
          <WorkOutlineIcon style={{ position: "relative", top: "22px" }} />
          <p class="jobs">Jobs</p>
        </li>
        <li>
          <ReplyIcon style={{ position: "relative", top: "22px" }} />
          <p class="back">Back</p>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
