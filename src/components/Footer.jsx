import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const { t } = useContext(LanguageContext);
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>LMS</h2>
          <p>
            <p>{t.footer.description}</p>
          </p>
        </div>

        <div className="footer-links">
          <h3>{t.footer.quickLinks}</h3>

          <Link to="/">{t.navbar.home}</Link>
          <Link to="/courses">{t.navbar.courses}</Link>
          <Link to="/about">{t.navbar.about}</Link>
          <Link to="/contact">{t.navbar.contact}</Link>
        </div>

        <div className="footer-links">
          <h3>{t.footer.learning}</h3>

          <Link to="/courses"> {t.footer.popularCourses}</Link>
          <Link to="/login">{t.navbar.login}</Link>
          <Link to="/register">{t.navbar.register}</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 LMS. {t.footer.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
