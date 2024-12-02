import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./JobSearch.css";

const JobSearch = () => {
  return (
    <div className="jobSearch">
      <h1>BRINGING YOU TO THE PERFECT JOB!</h1>
      <h2>11,000+ JOBS to Apply</h2>

      <div className="jobDashboard">
        <input type="text" placeholder="Search Jobs Now" />
        <button className="searchJob">Search</button>
        <div className="userActions">
          <button className="viewJobs">View Jobs</button>
          <button className="register">Register for FREE</button>
        </div>
      </div>

      <div className="quickSearch">
        <h3>
          Quick Job Search{" "}
          <span>
            <SearchIcon style={{ position: "relative", top: "8px" }} />
          </span>
        </h3>
        <ul>
          <li>
            <a href="">#Fresher</a>
          </li>
          <li>
            <a href="">#Work From Home</a>
          </li>
          <li>
            <a href="">#WFH</a>
          </li>
          <li>
            <a href="">#IT</a>
          </li>
          <li>
            <a href="">#HR</a>
          </li>
          <li>
            <a href="">#Back Office</a>
          </li>
          <li>
            <a href="">#BPO Jobs</a>
          </li>
          <li>
            <a href="">#ITES</a>
          </li>
          <li>
            <a href="">#Finance</a>
          </li>
          <li>
            <a href="">#Accounts</a>
          </li>
          <li>
            <a href="">#Medical</a>
          </li>
          <li>
            <a href="">#Pharma</a>
          </li>
          <li>
            <a href="">#Manager</a>
          </li>
          <li>
            <a href="">#Developer</a>
          </li>
          <li>
            <a href="">#Marketing</a>
          </li>
          <li>
            <a href="">#Engineering</a>
          </li>
          <li>
            <a href="">#Non Government Jobs</a>
          </li>
        </ul>
      </div>

      <div className="desktop-only">
        <div className="jobDashboard">
          <input type="text" placeholder="Search Jobs Now" />
          <button className="searchJob">Search</button>
          <div className="userActions">
            <button className="viewJobs">View Jobs</button>
            <button className="register">Register for FREE</button>
          </div>
        </div>

        <div className="quickSearch">
          <h3>
            Quick Job Search{" "}
            <span>
              <SearchIcon style={{ position: "relative", top: "8px" }} />
            </span>
          </h3>
          <ul>
            <li>
              <a href="">#Fresher</a>
            </li>
            <li>
              <a href="">#Work From Home</a>
            </li>
            <li>
              <a href="">#WFH</a>
            </li>
            <li>
              <a href="">#IT</a>
            </li>
            <li>
              <a href="">#HR</a>
            </li>
            <li>
              <a href="">#Back Office</a>
            </li>
            <li>
              <a href="">#BPO Jobs</a>
            </li>
            <li>
              <a href="">#ITES</a>
            </li>
            <li>
              <a href="">#Finance</a>
            </li>
            <li>
              <a href="">#Accounts</a>
            </li>
            <li>
              <a href="">#Medical</a>
            </li>
            <li>
              <a href="">#Pharma</a>
            </li>
            <li>
              <a href="">#Manager</a>
            </li>
            <li>
              <a href="">#Developer</a>
            </li>
            <li>
              <a href="">#Marketing</a>
            </li>
            <li>
              <a href="">#Engineering</a>
            </li>
            <li>
              <a href="">#Non Government Jobs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
