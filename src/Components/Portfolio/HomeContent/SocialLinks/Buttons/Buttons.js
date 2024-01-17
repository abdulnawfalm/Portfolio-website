import React from "react";
import "./Buttons.css";

const Buttons = () => {
  const handleDownload = () => {
    const resumePath = process.env.PUBLIC_URL + "/Resume.pdf";
    window.open(resumePath, "_blank");
  };

  return (
    <div className="buttons">
      <button className="resume" onClick={handleDownload}>
        Download Resume
      </button>
      <button className="view-portfolio">View Portfolio</button>
    </div>
  );
};

export default Buttons;
