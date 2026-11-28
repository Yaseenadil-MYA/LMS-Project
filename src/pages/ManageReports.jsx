
import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import "./ManageReports.css";

function ManageReports() {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);

  // Translation
  const translations = {
    en: {
      title: "Reports & Analytics",
      subtitle: "Overview of your LMS performance",
      students: "Total Students",
      courses: "Total Courses",
      teachers: "Total Teachers",
      lessons: "Total Lessons",
      enrollment: "Course Enrollment",
      activity: "Recent Activity",
      course: "Course",
      enrolled: "Enrolled Students",
      completed: "Completed",
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
      react: "React",
      php: "PHP",
      mysql: "MySQL",
      studentJoined: "New student registered",
      courseAdded: "New course added",
      lessonCompleted: "Lesson completed",
    },
    ps: {
      title: "راپورونه او احصایې",
      subtitle: "ستاسو د LMS سیسټم عمومي راپور",
      students: "ټول زده‌کوونکي",
      courses: "ټول کورسونه",
      teachers: "ټول ښوونکي",
      lessons: "ټول درسونه",
      enrollment: "د کورسونو نوم‌لیکنه",
      activity: "وروستي فعالیتونه",
      course: "کورس",
      enrolled: "نوم‌لیکل شوي زده‌کوونکي",
      completed: "بشپړ شوي",
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
      react: "React",
      php: "PHP",
      mysql: "MySQL",
      studentJoined: "نوی زده‌کوونکی ثبت شو",
      courseAdded: "نوی کورس اضافه شو",
      lessonCompleted: "درس بشپړ شو",
    },
    fa: {
      title: "گزارش‌ها و آمار",
      subtitle: "نمای کلی عملکرد سیستم آموزشی",
      students: "مجموع دانشجویان",
      courses: "مجموع دوره‌ها",
      teachers: "مجموع استادان",
      lessons: "مجموع درس‌ها",
      enrollment: "ثبت‌نام دوره‌ها",
      activity: "فعالیت‌های اخیر",
      course: "دوره",
      enrolled: "دانشجویان ثبت‌نام‌شده",
      completed: "تکمیل‌شده",
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
      react: "React",
      php: "PHP",
      mysql: "MySQL",
      studentJoined: "دانشجوی جدید ثبت‌نام شد",
      courseAdded: "دوره جدید اضافه شد",
      lessonCompleted: "درس تکمیل شد",
    },
  };

  const t = translations[language] || translations.en;

  // Sample report data
  const stats = [
    { title: t.students, number: 250, icon: "👨‍🎓" },
    { title: t.courses, number: 6, icon: "📚" },
    { title: t.teachers, number: 3, icon: "👨‍🏫" },
    { title: t.lessons, number: 30, icon: "📝" },
  ];

  const courseReports = [
    { name: t.html, students: 110, completed: 75 },
    { name: t.css, students: 130, completed: 90 },
    { name: t.javascript, students: 180, completed: 120 },
    { name: t.react, students: 120, completed: 85 },
    { name: t.php, students: 95, completed: 60 },
    { name: t.mysql, students: 80, completed: 50 },
  ];

  const activities = [
    { text: t.studentJoined, date: "Today", icon: "👤" },
    { text: t.courseAdded, date: "Yesterday", icon: "📚" },
    { text: t.lessonCompleted, date: "2 days ago", icon: "✅" },
  ];

  return (
    <div
      className={`manage-reports ${darkMode ? "dark-mode" : "light-mode"}`}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <div className="reports-header">
        <div>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="reports-stats">
        {stats.map((stat, index) => (
          <div className="report-stat-card" key={index}>
            <div className="report-stat-icon">{stat.icon}</div>
            <div>
              <h3>{stat.number}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Course Reports */}
      <div className="course-report-section">
        <h3>{t.enrollment}</h3>

        <div className="course-report-table">
          <table>
            <thead>
              <tr>
                <th>{t.course}</th>
                <th>{t.enrolled}</th>
                <th>{t.completed}</th>
              </tr>
            </thead>

            <tbody>
              {courseReports.map((course, index) => (
                <tr key={index}>
                  <td>{course.name}</td>
                  <td>{course.students}</td>
                  <td>{course.completed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="reports-activity">
        <h3>{t.activity}</h3>

        {activities.map((activity, index) => (
          <div className="activity-item" key={index}>
            <span className="activity-icon">{activity.icon}</span>
            <div>
              <p>{activity.text}</p>
              <small>{activity.date}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageReports;
