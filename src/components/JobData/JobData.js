import React from "react";
import "./JobData.css";

const JobData = () => {
  const jobData = [
    {
      id: 1,
      title: "Jobs Posted",
      number: "31179",
    },
    {
      id: 2,
      title: "Jobs Filled",
      number: "15153",
    },
    {
      id: 3,
      title: "Employers",
      number: "19967",
    },
    {
      id: 4,
      title: "Active Users",
      number: "1295358",
    },
  ];

  return (
    <div className="jobDataContainer">
      {jobData.map((item) => (
        <div key={item.id} className="jobDataItem">
          <div className="jobDataTitle">{item.title}</div>
          <div className="jobDataNumber">{item.number}</div>
        </div>
      ))}
    </div>
  );
};

export default JobData;
