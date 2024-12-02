import React from "react";
import "./Footer.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="footer">
      <WhatsAppIcon
        className="whatsappIcon"
        style={{
          color: "white",
          position: "fixed",
          right: "60px",
          bottom: "90px",
          width: "90px",
          height: "90px",
          background: "green",
          borderRadius: "40%",
        }}
      />
      <ul>
        <li>
          <a href="">Terms and conditions </a> &nbsp; &nbsp;&nbsp; &nbsp;
        </li>
        <li>
          <a href="">Privacy Policy </a> &nbsp; &nbsp;&nbsp; &nbsp;
        </li>
        <li>
          <a href="">Refund / Cancellation </a> &nbsp; &nbsp;&nbsp; &nbsp;
        </li>
        <li>
          <a href="">Policy </a> &nbsp; &nbsp;&nbsp; &nbsp;
        </li>
        <li>
          <a href="">About Us</a> &nbsp; &nbsp;&nbsp; &nbsp;
        </li>
        <li>
          <a href="">Contact Us </a> &nbsp; &nbsp;&nbsp; &nbsp;
        </li>
        <li>
          <a href="">FAQ </a> &nbsp; &nbsp;&nbsp; &nbsp;
        </li>
      </ul>

      <p className="copyright">
        © All Rights Reserved @ 2024 Jobtech Ventures Private Limited.
      </p>
    </div>
  );
};

export default Footer;
