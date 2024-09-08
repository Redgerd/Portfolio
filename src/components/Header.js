import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Header.scss";

const Header = () => {
  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <Link to="/">Muhammad Salaar</Link> {/* Use Link for navigation */}
        </div>
        <nav>
          <div className="nav-mobile">
            <a id="nav-toggle" href="#!">
              <span></span>
            </a>
          </div>
          <ul className="nav-list">
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
