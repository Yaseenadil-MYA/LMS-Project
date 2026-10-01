import React from "react";
import "./StudentDashboard.css";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const courses = [
    {
      id: 1,
      title: "HTML",
      description: "Learn HTML and build modern web structure.",
      progress: 70,
    },
    {
      id: 2,
      title: "CSS",
      description: "Learn CSS and build modern websites.",
      progress: 50,
    },
    {
      id: 3,
      title: "javascript",
      description: "learn javascript from basic to advance cencept.",
      progress: 60,
    },
    {
      id: 4,
      title: "React js",
      description: "learn react js and build modern web Application.",
      progress: 20,
    },
    {
      id: 5,
      title: "PHP",
      description: "Learn  and build modern websites.",
      progress: 70,
    },
    {
      id: 6,
      title: "mySQL",
      description: "Learn MySQL and manage databases professionally.",
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
            Dashboard
          </a>
          <a href="/courses">Courses</a>
          <a href="/my-courses">My Courses</a>
          <a href="/profile">Profile</a>
          <a href="/login">Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div>
            <h1>Student Dashboard</h1>
            <p>Welcome back! Keep learning and growing.</p>
          </div>

          {/* <div className="student-info">
            <span>👨‍🎓</span>

            <div>
              <strong>Student</strong>
              <small>Online</small>
            </div>
          </div> */}
          <div className="student-info">
            <div className="student-avatar">Y</div>
            <div>
              <strong>Yasin</strong>
              <small>Online</small>
            </div>
          </div>
        </header>

        {/* Statistics */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon">📚</div>

            <div>
              <h3>6</h3>
              <p>Total Courses</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🎓</div>

            <div>
              <h3>3</h3>
              <p>Enrolled Courses</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✅</div>

            <div>
              <h3>2</h3>
              <p>Completed Courses</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📈</div>

            <div>
              <h3>65%</h3>
              <p>Learning Progress</p>
            </div>
          </div>
        </div>

        {/* My Courses */}
        <div className="my-courses">
          <h2>My Courses</h2>

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
                  Continue Learning
                </Link>
              </div>
            ))}
          </div>
        </div>
        <footer className="dashboard-footer">
          <p>© 2026 LMS. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default StudentDashboard;
