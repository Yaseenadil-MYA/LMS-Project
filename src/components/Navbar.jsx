import { useState, useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  // Control mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigate to different pages
  const navigate = useNavigate();
  const location = useLocation();

  // Get Theme information from ThemeContext
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  // Get Language information from LanguageContext
  const { language, changeLanguage,t } = useContext(LanguageContext);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <h1>LMS</h1>
      </div>

      {/* Mobile Menu Button */}
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          {t.navbar.home}
        </Link>

        <Link
          to="/courses"
          className={location.pathname === "/courses" ? "active" : ""}
        >
          {t.navbar.courses}
        </Link>

        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          {t.navbar.about}
        </Link>

        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          {t.navbar.contact}
        </Link>
      </ul>

      {/* Navbar Buttons */}
      <div className={`nav-buttons ${menuOpen ? "active" : ""}`}>
        {/* Language Selector */}
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="language-select"
        >
          <option value="en">English</option>
          <option value="ps">پښتو</option>
          <option value="fa">دری</option>
        </select>
        {/* Dark / Light Mode */}
        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        {/* Login */}
        <button onClick={() => navigate("/login")}>
          {t.navbar.login}
        </button>

        {/* Register */}
        <button onClick={() => navigate("/register")}>
          {t.navbar.register}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
