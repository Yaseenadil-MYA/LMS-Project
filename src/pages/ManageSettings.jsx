
import React, { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import "./ManageSettings.css";

function ManageSettings() {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);

  // Translation
  const translations = {
    en: {
      title: "System Settings",
      subtitle: "Manage your LMS system settings",
      general: "General Settings",
      website: "Website Name",
      email: "Admin Email",
      language: "Default Language",
      notifications: "Notification Settings",
      emailNotifications: "Email Notifications",
      newStudents: "New Student Registration",
      courseUpdates: "Course Updates",
      save: "Save Settings",
      success: "Settings saved successfully!",
      english: "English",
      pashto: "Pashto",
      dari: "Dari",
    },

    ps: {
      title: "د سیسټم تنظیمات",
      subtitle: "د LMS سیسټم تنظیمات اداره کړئ",
      general: "عمومي تنظیمات",
      website: "د ویب‌سایټ نوم",
      email: "د اډمین ایمیل",
      language: "اصلي ژبه",
      notifications: "د خبرتیاوو تنظیمات",
      emailNotifications: "د ایمیل خبرتیاوې",
      newStudents: "د نویو زده‌کوونکو ثبت",
      courseUpdates: "د کورسونو تازه معلومات",
      save: "تنظیمات خوندي کړئ",
      success: "تنظیمات په بریالیتوب خوندي شول!",
      english: "انګلیسي",
      pashto: "پښتو",
      dari: "دري",
    },

    fa: {
      title: "تنظیمات سیستم",
      subtitle: "تنظیمات سیستم آموزشی را مدیریت کنید",
      general: "تنظیمات عمومی",
      website: "نام وب‌سایت",
      email: "ایمیل مدیر",
      language: "زبان پیش‌فرض",
      notifications: "تنظیمات اعلان‌ها",
      emailNotifications: "اعلان‌های ایمیلی",
      newStudents: "ثبت‌نام دانشجویان جدید",
      courseUpdates: "به‌روزرسانی دوره‌ها",
      save: "ذخیره تنظیمات",
      success: "تنظیمات با موفقیت ذخیره شد!",
      english: "انگلیسی",
      pashto: "پشتو",
      dari: "دری",
    },
  };

  const t = translations[language] || translations.en;

  // Settings State
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("lmsSettings");

    return savedSettings
      ? JSON.parse(savedSettings)
      : {
          websiteName: "MYA LMS",
          adminEmail: "admin@example.com",
          defaultLanguage: "en",
          emailNotifications: true,
          newStudents: true,
          courseUpdates: false,
        };
  });

  const [message, setMessage] = useState("");

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setMessage("");
  };

  // Save Settings
  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("lmsSettings", JSON.stringify(settings));

    setMessage(t.success);
  };

  return (
    <div
      className={`manage-settings ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      {/* Header */}
      <div className="settings-header">
        <h2>{t.title}</h2>
        <p>{t.subtitle}</p>
      </div>

      <form className="settings-form" onSubmit={handleSubmit}>

        {/* General Settings */}
        <div className="settings-card">
          <h3>⚙️ {t.general}</h3>

          <div className="settings-group">
            <label>{t.website}</label>

            <input
              type="text"
              name="websiteName"
              value={settings.websiteName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="settings-group">
            <label>{t.email}</label>

            <input
              type="email"
              name="adminEmail"
              value={settings.adminEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="settings-group">
            <label>{t.language}</label>

            <select
              name="defaultLanguage"
              value={settings.defaultLanguage}
              onChange={handleChange}
            >
              <option value="en">{t.english}</option>
              <option value="ps">{t.pashto}</option>
              <option value="fa">{t.dari}</option>
            </select>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="settings-card">
          <h3>🔔 {t.notifications}</h3>

          <label className="settings-toggle">
            <span>{t.emailNotifications}</span>
            <input
              type="checkbox"
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleChange}
            />
          </label>

          <label className="settings-toggle">
            <span>{t.newStudents}</span>
            <input
              type="checkbox"
              name="newStudents"
              checked={settings.newStudents}
              onChange={handleChange}
            />
          </label>

          <label className="settings-toggle">
            <span>{t.courseUpdates}</span>
            <input
              type="checkbox"
              name="courseUpdates"
              checked={settings.courseUpdates}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Save Button */}
        <button type="submit" className="settings-save-btn">
          {t.save}
        </button>

        {message && (
          <p className="settings-success">{message}</p>
        )}

      </form>
    </div>
  );
}

export default ManageSettings;
