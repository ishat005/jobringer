import React, { useState } from "react";
import "./FeaturedJobsDesktop.css";

const FeaturedJobsDesktop = () => {
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
    {
      id: 5,
      jobRole: "Customer Care Executive",
      companyName: "MNC Job Wala",
      workExperienceYears: "0-2",
      location: "Bangalore / Bengaluru / India",
      jobType: "Full Time - Permanent",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < cards.length - 4) {
      setCurrentIndex(currentIndex + 4);
    } else {
      setCurrentIndex(0); // Loop back to the first card
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4);
    } else {
      setCurrentIndex(cards.length - 4); // Loop back to the last card
    }
  };

  return (
    <div className="featuredJobsContainerDesktop">
      <h2 className="featuredJobs">Featured Jobs</h2>
      <div className="slider-container">
        <button className="arrow left-arrow" onClick={prevCard}>
          &lt;
        </button>
        <div className="card">
          <div className="job-postings">
            {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
              <div key={index} className="job-posting">
                <h2 className="float-right">In Office Job</h2>
                <h3 className="job-role">{card.jobRole}</h3>
                <p className="company-name">Company: {card.companyName}</p>
                <p className="job-type">Job Type: {card.jobType}</p>
                <p className="work-experience">
                  Work Experience: {card.workExperienceYears} years
                </p>
                <p className="location">Location: {card.location}</p>
                <button className="apply-button">Apply</button>
              </div>
            ))}
          </div>
        </div>
        <button className="arrow right-arrow" onClick={nextCard}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobsDesktop;
