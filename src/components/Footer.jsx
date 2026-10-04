import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h2>LMS</h2>
          <p>
            Learn new skills, improve your knowledge,
            and build your future with our LMS.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/contect">Contact</Link>
        </div>

        <div className="footer-links">
          <h3>Learning</h3>

          <Link to="/courses">Popular Courses</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 LMS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;