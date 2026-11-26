import React, { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import ManageCourses from "./ManageCourses";
import "./AdminDashboard.css";
import ManageStudents from "./ManageStudents";

const AdminDashboard = () => {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);

  const [activePage, setActivePage] = useState("dashboard");

  // Dashboard translations
  const translations = {
    en: {
      dashboard: "Dashboard",
      students: "Students",
      courses: "Courses",
      teachers: "Teachers",
      lessons: "Lessons",
      quizzes: "Quizzes",
      reports: "Reports",
      settings: "Settings",
      logout: "Logout",
      welcome: "Welcome, Admin!",
      overview: "Here is your LMS overview.",
      totalStudents: "Total Students",
      totalCourses: "Total Courses",
      totalTeachers: "Total Teachers",
      totalLessons: "Total Lessons",
      recentStudents: "Recent Students",
      name: "Name",
      email: "Email",
      status: "Status",
      active: "Active",
      inactive: "Inactive",
      adminPanel: "Admin Panel",
      noData: "No data available yet.",
    },

    ps: {
      dashboard: "ډشبورډ",
      students: "زده کوونکي",
      courses: "کورسونه",
      teachers: "ښوونکي",
      lessons: "درسونه",
      quizzes: "ازموینې",
      reports: "راپورونه",
      settings: "تنظیمات",
      logout: "وتل",
      welcome: "ښه راغلاست، اډمین!",
      overview: "دا ستاسو د LMS سیستم عمومي معلومات دي.",
      totalStudents: "ټول زده کوونکي",
      totalCourses: "ټول کورسونه",
      totalTeachers: "ټول ښوونکي",
      totalLessons: "ټول درسونه",
      recentStudents: "وروستي زده کوونکي",
      name: "نوم",
      email: "ایمیل",
      status: "حالت",
      active: "فعال",
      inactive: "غیرفعال",
      adminPanel: "د اډمین پینل",
      noData: "تر اوسه معلومات نشته.",
    },

    fa: {
      dashboard: "داشبورد",
      students: "دانش‌آموزان",
      courses: "دوره‌ها",
      teachers: "استادان",
      lessons: "درس‌ها",
      quizzes: "آزمون‌ها",
      reports: "گزارش‌ها",
      settings: "تنظیمات",
      logout: "خروج",
      welcome: "خوش آمدید، مدیر!",
      overview: "این نمای کلی سیستم LMS شما است.",
      totalStudents: "مجموع دانش‌آموزان",
      totalCourses: "مجموع دوره‌ها",
      totalTeachers: "مجموع استادان",
      totalLessons: "مجموع درس‌ها",
      recentStudents: "دانش‌آموزان اخیر",
      name: "نام",
      email: "ایمیل",
      status: "وضعیت",
      active: "فعال",
      inactive: "غیرفعال",
      adminPanel: "پنل مدیریت",
      noData: "هنوز اطلاعاتی موجود نیست.",
    },
  };

  const t = translations[language] || translations.en;

  // Sidebar menu items
  const menuItems = [
    { id: "dashboard", label: t.dashboard, icon: "📊" },
    { id: "students", label: t.students, icon: "👨‍🎓" },
    { id: "courses", label: t.courses, icon: "📚" },
    { id: "teachers", label: t.teachers, icon: "👨‍🏫" },
    { id: "lessons", label: t.lessons, icon: "📖" },
    { id: "quizzes", label: t.quizzes, icon: "📝" },
    { id: "reports", label: t.reports, icon: "📈" },
    { id: "settings", label: t.settings, icon: "⚙️" },
  ];

  // Sample statistics
  const stats = [
    {
      title: t.totalStudents,
      number: "1,250",
      icon: "👨‍🎓",
      color: "blue",
    },
    {
      title: t.totalCourses,
      number: "24",
      icon: "📚",
      color: "green",
    },
    {
      title: t.totalTeachers,
      number: "18",
      icon: "👨‍🏫",
      color: "orange",
    },
    {
      title: t.totalLessons,
      number: "156",
      icon: "📖",
      color: "purple",
    },
  ];

  // Sample student data
  const studentsData = [
    {
      id: 1,
      name: "Ahmad Khan",
      email: "ahmad@example.com",
      status: "active",
    },
    {
      id: 2,
      name: "Ali Ahmad",
      email: "ali@example.com",
      status: "active",
    },
    {
      id: 3,
      name: "Mohammad",
      email: "mohammad@example.com",
      status: "inactive",
    },
    {
      id: 4,
      name: "Abdullah",
      email: "abdullah@example.com",
      status: "active",
    },
  ];

  return (
    <div
      className={`admin-dashboard ${darkMode ? "dark-mode" : "light-mode"}`}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>🎓 LMS</h2>
          <p>{t.adminPanel}</p>
        </div>

        <nav className="admin-menu">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`admin-menu-item ${
                activePage === item.id ? "active" : ""
              }`}
              onClick={() => setActivePage(item.id)}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <button className="admin-logout">🚪 {t.logout}</button>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Header */}
        <header className="admin-header">
          <div>
            <h1>{t.welcome}</h1>
            <p>{t.overview}</p>
          </div>

          <div className="admin-profile">
            <span>👤</span>
            <div>
              <strong>Admin</strong>
              <small>Administrator</small>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        {activePage === "dashboard" ? (
          <>
            {/* Statistics */}
            <section className="admin-stats">
              {stats.map((stat, index) => (
                <div className={`admin-stat-card ${stat.color}`} key={index}>
                  <div>
                    <p>{stat.title}</p>
                    <h2>{stat.number}</h2>
                  </div>

                  <span className="stat-icon">{stat.icon}</span>
                </div>
              ))}
            </section>

            {/* Recent Students */}
            <section className="admin-table-section">
              <h2>{t.recentStudents}</h2>

              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>{t.name}</th>
                      <th>{t.email}</th>
                      <th>{t.status}</th>
                    </tr>
                  </thead>

                  <tbody>
                    {studentsData.map((student) => (
                      <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>
                          <span className={`student-status ${student.status}`}>
                            {student.status === "active"
                              ? t.active
                              : t.inactive}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        ) : activePage === "students" ? (
          <ManageStudents />
        ) : activePage === "courses" ? (
          <ManageCourses />
        ) : (
          <section className="admin-table-section">
            <h2>{menuItems.find((item) => item.id === activePage)?.label}</h2>

            <p>{t.noData}</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
