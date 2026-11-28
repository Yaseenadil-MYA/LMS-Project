
import React, { createContext, useState, useEffect } from "react";

import en from "../languages/en";
import ps from "../languages/ps";
import fa from "../languages/fa";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {

  // Get saved language from localStorage
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  // Change page direction based on language
  useEffect(() => {
    document.documentElement.dir =
      language === "ps" || language === "fa" ? "rtl" : "ltr";

    // Save selected language
    localStorage.setItem("language", language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const translations = {
    en,
    ps,
    fa,
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
