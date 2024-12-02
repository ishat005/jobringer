import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";

import "./FollowUs.css";

const FollowUs = () => {
  return (
    <div className="followUsContainer">
      <p className="followUsText">
        Follow Us <br /> On
      </p>

      <p className="followUsTextDesktop">Follow Us On</p>
      <div className="followUsIcons">
        <WhatsAppIcon />
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <LinkedInIcon />
        <YouTubeIcon />
        <TelegramIcon />
      </div>
    </div>
  );
};

export default FollowUs;
