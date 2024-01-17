import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <p>&copy; {currentYear} Portfolio. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
