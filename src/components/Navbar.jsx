
import { useState, useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  // Control mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigate to different pages
  const navigate = useNavigate();

  // Get Theme information from ThemeContext
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (

    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <h1>LMS</h1>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/courses">Courses</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contect">Contect</Link>
        </li>

      </ul>

      {/* Navbar Buttons */}
      <div className={`nav-buttons ${menuOpen ? "active" : ""}`}>

        {/* Dark / Light Mode */}
        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        {/* Login */}
        <button onClick={() => navigate("/login")}>
          Login
        </button>

        {/* Register */}
        <button onClick={() => navigate("/register")}>
          Register
        </button>

      </div>

    </nav>
  );
}

export default Navbar;