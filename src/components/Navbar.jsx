import { useState, useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  // Control mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigate to different pages
  const navigate = useNavigate();
  const location = useLocation();

  // Get Theme information from ThemeContext
  const { darkMode, toggleTheme } = useContext(ThemeContext);

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
          Home
        </Link>

        <Link
          to="/courses"
          className={location.pathname === "/courses" ? "active" : ""}
        >
          Courses
        </Link>

         <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About
        </Link>

          <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact
        </Link>
      </ul>

      {/* Navbar Buttons */}
      <div className={`nav-buttons ${menuOpen ? "active" : ""}`}>
        {/* Dark / Light Mode */}
        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        {/* Login */}
        <button onClick={() => navigate("/login")}>Login</button>

        {/* Register */}
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </nav>
  );
}

export default Navbar;
