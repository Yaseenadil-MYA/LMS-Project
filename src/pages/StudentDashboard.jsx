import React, { useContext } from "react";
import "./StudentDashboard.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";

const StudentDashboard = () => {
  const { t } = useContext(LanguageContext);
  const courses = [
    {
      id: 1,
      title: "HTML",
      description: t.dashboard.htmlDescription,
      progress: 70,
    },
    {
      id: 2,
      title: "CSS",
      description: t.dashboard.cssDescription,
      progress: 50,
    },
    {
      id: 3,
      title: "javascript",
      description: t.dashboard.jsDescription,
      progress: 60,
    },
    {
      id: 4,
      title: "React js",
      description: t.dashboard.reactDescription,
      progress: 20,
    },
    {
      id: 5,
      title: "PHP",
      description: t.dashboard.phpDescription,
      progress: 70,
    },
    {
      id: 6,
      title: "mySQL",
      description: t.dashboard.mysqlDescription,
      progress: 30,
    },
  ];

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <h2>LMS</h2>

        <nav>
          <a className="active" href="/studentdashboard">
            {t.dashboard.dashboard}
          </a>
          <a href="/courses">{t.dashboard.courses}</a>
          <a href="/my-courses">{t.dashboard.myCourses}</a>
          <a href="/profile">{t.dashboard.profile}</a>
          <a href="/login">{t.dashboard.logout}</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div>
            <h1>{t.dashboard.title}</h1>
            <p>{t.dashboard.welcome}</p>
          </div>

          <div className="student-info">
            <div className="student-avatar">Y</div>
            <div>
              <strong>Yasin</strong>
              <small>{t.dashboard.online}</small>
            </div>
          </div>
        </header>

        {/* Statistics */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon">📚</div>

            <div>
              <h3>6</h3>
              <p>{t.dashboard.totalCourses}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🎓</div>

            <div>
              <h3>3</h3>
              <p>{t.dashboard.enrolledCourses}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✅</div>

            <div>
              <h3>2</h3>
              <p>{t.dashboard.completedCourses}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📈</div>

            <div>
              <h3>65%</h3>
              <p>{t.dashboard.learningProgress}</p>
            </div>
          </div>
        </div>

        {/* My Courses */}
        <div className="my-courses">
          <h2>{t.dashboard.myCourses}</h2>

          <div className="courses-container">
            {courses.map((course) => (
              <div className="my-course-card" key={course.title}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>

                {/* Progress */}
                <div className="course-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>

                  <span>{course.progress}%</span>
                </div>

                {/* Button */}
                {/* <button className="continue-btn">Continue Learning</button> */}
                <Link to={`/lessons/${course.id}`} className="continue-btn">
                  {t.dashboard.continueLearning}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <footer className="dashboard-footer">
          <p>{t.dashboard.footer}</p>
        </footer>
      </main>
    </div>
  );
};

export default StudentDashboard;
