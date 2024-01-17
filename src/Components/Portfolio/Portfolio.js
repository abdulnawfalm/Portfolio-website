import React from "react";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="title fade-in-text">My Portfolio</div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
