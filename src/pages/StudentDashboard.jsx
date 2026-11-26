import React, { useContext, useState, useEffect } from "react";
import "./StudentDashboard.css";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";

const StudentDashboard = () => {
  const { t } = useContext(LanguageContext);

  // Detect current route
  const location = useLocation();

  // Load completed lessons from localStorage
  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("completedLessons") || "{}");
    } catch (error) {
      return {};
    }
  });

  // Load student profile from localStorage
  const [studentProfile, setStudentProfile] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("studentProfile")) || {};
    } catch (error) {
      return {};
    }
  });

  // Load profile image from localStorage
  const [profileImage, setProfileImage] = useState(() => {
    return localStorage.getItem("profileImage") || "";
  });

  // Update profile and completed lessons when route changes
  useEffect(() => {
    try {
      const savedProfile =
        JSON.parse(localStorage.getItem("studentProfile")) || {};

      const savedImage = localStorage.getItem("profileImage") || "";

      const savedLessons = JSON.parse(
        localStorage.getItem("completedLessons") || "{}",
      );

      setStudentProfile(savedProfile);
      setProfileImage(savedImage);
      setCompletedLessons(savedLessons);
    } catch (error) {
      console.error("Error loading dashboard data:", error);
    }
  }, [location]);

  // Calculate real progress for each course
  const getCourseProgress = (courseId) => {
    const totalLessons = {
      1: 4,
      2: 5,
      3: 5,
      4: 5,
      5: 5,
      6: 5,
    };

    const completedCount = Object.keys(completedLessons).filter(
      (key) => key.startsWith(`${courseId}-`) && completedLessons[key] === true,
    ).length;

    return Math.round((completedCount / totalLessons[courseId]) * 100);
  };

  // Courses with dynamic progress
  const courses = [
    {
      id: 1,
      title: "HTML",
      description: t.dashboard.htmlDescription,
      progress: getCourseProgress(1),
    },
    {
      id: 2,
      title: "CSS",
      description: t.dashboard.cssDescription,
      progress: getCourseProgress(2),
    },
    {
      id: 3,
      title: "javascript",
      description: t.dashboard.jsDescription,
      progress: getCourseProgress(3),
    },
    {
      id: 4,
      title: "React js",
      description: t.dashboard.reactDescription,
      progress: getCourseProgress(4),
    },
    {
      id: 5,
      title: "PHP",
      description: t.dashboard.phpDescription,
      progress: getCourseProgress(5),
    },
    {
      id: 6,
      title: "mySQL",
      description: t.dashboard.mysqlDescription,
      progress: getCourseProgress(6),
    },
  ];

  // Calculate dashboard statistics
  const totalCourses = courses.length;

  const enrolledCourses = courses.filter(
    (course) => course.progress > 0,
  ).length;

  const completedCourses = courses.filter(
    (course) => course.progress === 100,
  ).length;

  const averageProgress = Math.round(
    courses.reduce((total, course) => total + course.progress, 0) /
      totalCourses,
  );

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
            <div className="student-avatar">
              {profileImage ? (
                <img src={profileImage} alt="Student Profile" />
              ) : (
                (studentProfile.name || "Y").charAt(0).toUpperCase()
              )}
            </div>

            <div>
              <strong>{studentProfile.name || "Yasin"}</strong>

              <small>{t.dashboard.online}</small>
            </div>
          </div>
        </header>

        {/* Statistics */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div>
              <h3>{totalCourses}</h3>
              <p>{t.dashboard.totalCourses}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🎓</div>
            <div>
              <h3>{enrolledCourses}</h3>
              <p>{t.dashboard.enrolledCourses}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div>
              <h3>{completedCourses}</h3>
              <p>{t.dashboard.completedCourses}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <div>
              <h3>{averageProgress}%</h3>
              <p>{t.dashboard.learningProgress}</p>
            </div>
          </div>
        </div>

        {/* Overall Progress */}
        <div className="overall-progress">
          <div className="overall-progress-info">
            <h3>{t.dashboard.learningProgress}</h3>
            <span>{averageProgress}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${averageProgress}%` }}
            ></div>
          </div>
        </div>

        {/* My Courses */}
        <div className="my-courses">
          <h2>{t.dashboard.myCourses}</h2>

          <div className="courses-container">
            {courses.map((course) => (
              <div className="my-course-card" key={course.id}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>

                {/* Course Progress */}
                <div className="course-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    ></div>
                  </div>

                  <span>{course.progress}%</span>
                </div>

                {/* Continue Learning */}
                <Link to={`/lessons/${course.id}`} className="continue-btn">
                  {t.dashboard.continueLearning}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="recent-activity">
          <h2>{t.dashboard.recentActivity}</h2>

          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">📘</div>

              <div className="activity-details">
                <h4>{t.dashboard.startedLearning}</h4>
                <p>{t.dashboard.continueReact}</p>
              </div>

              <span className="activity-time">{t.dashboard.today}</span>
            </div>

            <div className="activity-item">
              <div className="activity-icon">✅</div>

              <div className="activity-details">
                <h4>{t.dashboard.completedLesson}</h4>
                <p>{t.dashboard.htmlUpdated}</p>
              </div>

              <span className="activity-time">{t.dashboard.yesterday}</span>
            </div>

            <div className="activity-item">
              <div className="activity-icon">🎓</div>

              <div className="activity-details">
                <h4>{t.dashboard.enrolledNewCourse}</h4>
                <p>{t.dashboard.newCourseStarted}</p>
              </div>

              <span className="activity-time">{t.dashboard.twoDaysAgo}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="dashboard-footer">
          <p>{t.dashboard.footer}</p>
        </footer>
      </main>
    </div>
  );
};

export default StudentDashboard;
