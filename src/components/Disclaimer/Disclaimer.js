import React from "react";
import "./Disclaimer.css";
import startUpIndia from "../../images/startuplogo.png";

const Disclaimer = () => {
  return (
    <>
      <div className="disclaimerContainer">
        <div className="disclaimer">
          <b>Disclaimer:</b> All Trademarks and Logos are the property of their
          respective owners, depicted here purely for representation purpose. |
          Jobringer.com has taken all reasonable steps to ensure that
          information on this site is genuine. Job Applicants are advised to
          evaluate independently. Jobringer.com shall not have any
          responsibility in this regard. All Jobseeker services are strictly
          designed & meant only for job search assistance and to maximize the
          chances for the jobseekers to get their dream job. All Job Seeker
          Credentials and Employment Opportunities are subject to individual
          merit & evaluation. We do not guarantee any job to any jobseeker.
        </div>

        <div className="recognizedBy">
          <p>
            <a href="">Recognized By</a>
          </p>
          <img src={startUpIndia} alt="" />
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
