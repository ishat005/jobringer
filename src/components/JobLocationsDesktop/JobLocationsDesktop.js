import React from "react";
import "./JobLocationsDesktop.css";

const JobLocationsDesktop = () => {
  return (
    <div className="jobLocationsDesktop">
      <div className="jobsIndiaDesktop">
        <h2 className="jobsIndiaTitle">JOBS IN INDIA</h2>
        <ul>
          <li>#Mumbai</li>
          <li>#Delhi</li>
          <li>#Ajmer</li>
          <li>#Pune</li>
          <li>#Hyderabad</li>
          <li>#Agra</li>
          <li>#Chennai</li>
          <li>#Kolkata</li>
          <li>#Indore</li>
          <li>#Gurugram</li>
          <li>#Jaipur</li>
          <li>#Ahmedabad</li>
        </ul>
      </div>

      <div className="jobsInternationalDesktop">
        <h2 className="jobsInternationalTitle">INTERNATIONAL JOBS</h2>
        <ul>
          <li>#Africa</li>
          <li>#USA</li>
          <li>#UK</li>
          <li>#Australia</li>
          <li>#Canada</li>
          <li>#Singapore</li>
          <li>#Dubai</li>
          <li>#Saudi Arabia</li>
          <li>#New Zealand</li>
        </ul>
      </div>
    </div>
  );
};

export default JobLocationsDesktop;
