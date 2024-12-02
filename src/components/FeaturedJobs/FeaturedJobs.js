import React, { useState } from "react";
import "./FeaturedJobs.css";

const FeaturedJobs = () => {
  const cards = [
    {
      id: 1,
      jobRole: "Software Engineer",
      companyName: "ABC Corporation",
      workExperienceYears: 3,
      location: "New York",
      jobType: "Full-time",
    },
    {
      id: 2,
      jobRole: "Data Scientist",
      companyName: "DEF Startups",
      workExperienceYears: 5,
      location: "San Francisco",
      jobType: "Full-time",
    },
    {
      id: 3,
      jobRole: "Product Manager",
      companyName: "GHI Inc.",
      workExperienceYears: 2,
      location: "Chicago",
      jobType: "Full-time",
    },
    {
      id: 4,
      jobRole: "DevOps Engineer",
      companyName: "JKL Corp.",
      workExperienceYears: 4,
      location: "Seattle",
      jobType: "Full-time",
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
    <div className="featuredJobsContainer">
      <h2 className="featuredJobs">Featured Jobs</h2>
      <div className="slider-container">
        <button className="arrow left-arrow" onClick={prevCard}>
          &lt;
        </button>
        <div className="card">
          <h2 className="float-right">In Office Job</h2>
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

export default FeaturedJobs;
