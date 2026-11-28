
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);

  const translations = {
    en: {
      title: "Admin Login",
      subtitle: "Sign in to manage your LMS",
      email: "Email Address",
      password: "Password",
      login: "Login to Dashboard",
      emailPlaceholder: "Enter admin email",
      passwordPlaceholder: "Enter password",
      error: "Invalid email or password!",
    },
    ps: {
      title: "د اډمین ننوتل",
      subtitle: "د LMS اداره کولو لپاره ننوځئ",
      email: "ایمیل ادرس",
      password: "پاسورډ",
      login: "ډشبورډ ته ننوتل",
      emailPlaceholder: "د اډمین ایمیل ولیکئ",
      passwordPlaceholder: "پاسورډ ولیکئ",
      error: "ایمیل یا پاسورډ ناسم دی!",
    },
    fa: {
      title: "ورود مدیر",
      subtitle: "برای مدیریت سیستم وارد شوید",
      email: "آدرس ایمیل",
      password: "رمز عبور",
      login: "ورود به داشبورد",
      emailPlaceholder: "ایمیل مدیر را وارد کنید",
      passwordPlaceholder: "رمز عبور را وارد کنید",
      error: "ایمیل یا رمز عبور اشتباه است!",
    },
  };

  const t = translations[language] || translations.en;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend demo credentials
    if (
      formData.email === "admin@example.com" &&
      formData.password === "Admin123"
    ) {
      localStorage.setItem("adminLoggedIn", "true");

      navigate("/admin");
    } else {
      setError(t.error);
    }
  };

  return (
    <div
      className={`admin-login-page ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <div className="admin-login-card">
        <div className="admin-login-icon">🔐</div>

        <h2>{t.title}</h2>
        <p className="admin-login-subtitle">{t.subtitle}</p>

        <form onSubmit={handleSubmit}>
          <div className="admin-login-group">
            <label>{t.email}</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.emailPlaceholder}
              required
            />
          </div>

          <div className="admin-login-group">
            <label>{t.password}</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={t.passwordPlaceholder}
              required
            />
          </div>

          {error && <p className="admin-login-error">{error}</p>}

          <button type="submit">
            {t.login}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
