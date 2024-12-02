import React, { useState } from "react";
import "./RemoteJobs.css";

const RemoteJobs = () => {
  const cards = [
    {
      id: 1,
      jobRole: "Sr Computer Vision Engineer",
      companyName: "techolution",
      workExperienceYears: "4-6",
      location: "USA, United States of America",
      jobType: "Full Time - Permanent",
    },
    {
      id: 2,
      jobRole: "Market Research & Digital Strategy Experts",
      companyName: "Outthinc Global Communications",
      workExperienceYears: "2-5",
      location: "Kolkata / India",
      jobType: "Full Time - Permanent",
    },
    {
      id: 3,
      jobRole: "Telecommunications",
      companyName: "HireBloc Ventures Pvt. Ltd.",
      workExperienceYears: "0-1",
      location: "Mumbai / India",
      jobType: "Full Time - Permanent",
    },
    {
      id: 4,
      jobRole: "Senior Software Engineer",
      companyName: "Ivanti",
      workExperienceYears: "4-15",
      location: "UK, United Kingdom",
      jobType: "Full Time - Permanent",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first card
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(cards.length - 1); // Loop back to the last card
    }
  };

  return (
    <div className="remoteJobsContainer">
      <h2 className="remoteJobsTitle">Remote Jobs</h2>
      <div className="slider-container-remote">
        <button className="arrow left-arrow" onClick={prevCard}>
          &lt;
        </button>
        <div className="card">
          <h2 className="float-right">Hybrid Job</h2>
          <div className="job-posting">
            <h3 className="job-role">{cards[currentIndex].jobRole}</h3>
            <p className="company-name">
              Company: {cards[currentIndex].companyName}
            </p>
            <p className="job-type">Job Type: {cards[currentIndex].jobType}</p>
            <p className="work-experience">
              Work Experience: {cards[currentIndex].workExperienceYears} years
            </p>
            <p className="location">Location: {cards[currentIndex].location}</p>
            <button className="apply-button">Apply</button>
          </div>
        </div>
        <button className="arrow right-arrow" onClick={nextCard}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default RemoteJobs;
