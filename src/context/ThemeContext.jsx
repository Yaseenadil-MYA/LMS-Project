import React, { createContext, useState } from "react";

// Create Theme Context
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

  // Store current theme
  const [darkMode, setDarkMode] = useState(false);

  // Toggle between Light and Dark Mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;