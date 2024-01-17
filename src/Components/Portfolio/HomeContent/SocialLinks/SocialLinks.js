import React from "react";
import "./SocialLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faBehance,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://www.behance.net/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faBehance} />
      </a>
      <a href="mailto:abdulnawfal11011@gmail.com">
        <FontAwesomeIcon icon={faGoogle} />
      </a>
    </div>
  );
};

export default SocialLinks;
