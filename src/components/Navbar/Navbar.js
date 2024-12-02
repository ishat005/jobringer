import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-left">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="logo-right">
        <p className="textAnimation">
          11,000+ <br />
          Active Jobs
        </p>
      </div>

      <div className="nav-middle">
        <h2 className="nav-title">
          BRINGING YOU THE <span>PERFECT JOB</span>
        </h2>
      </div>

      <div className="desktop-only">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="" className="nav-link">
              Jobs
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Active Employers
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link button">
              Jobseeker Login
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link employer-login-button">
              Employer Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
