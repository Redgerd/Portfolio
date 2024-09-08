import React, { useState, useEffect } from "react";
import "./Footer.scss"; // Assuming you have moved the styles to a separate CSS file

const Footer = () => {
  const [lastBuiltOn, setLastBuiltOn] = useState("");

  useEffect(() => {
    // Function to format date and time
    const getFormattedDate = () => {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      };
      return new Intl.DateTimeFormat("en-US", options).format(new Date());
    };

    // Set the last built date
    setLastBuiltOn(getFormattedDate());
  }, []);
  return (
    <footer>
      <div className="footer-content">
        <h3>Thanks for visiting!</h3>
        <ul className="socials">
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin-square"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>
          </li>
        </ul>
        <p className="last-built-on">Last Built On: {lastBuiltOn}</p>
      </div>
    </footer>
  );
};

export default Footer;
