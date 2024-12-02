import React from "react";
import "./Employers.css";

const Employers = () => {
  return (
    <>
      <div className="employerDashboard">
        <h1>EMPLOYERS</h1>

        <div className="desktop-only">
          <h1>EMPLOYERS</h1>
          <h1 className="welcomeOffer">WELCOME OFFER - FREE JOB Postings and Much More.</h1>
          <button className="register">Register for FREE</button>
          <button className="postJob">Post A Job</button>
          <a href="#" className="salesEnquiry">
          Sales Enquiry
        </a>
        </div>

        <div className="employerActions">
          <button className="register">Register for FREE</button>
          <button className="postJob">Post A Job</button>
        </div>
        <a href="#" className="salesEnquiry">
          Sales Enquiry
        </a>
      </div>
    </>
  );
};

export default Employers;
