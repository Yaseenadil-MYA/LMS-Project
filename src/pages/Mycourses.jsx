import React from "react";
import "./Mycourses.css";
import { Link } from "react-router-dom";

const Mycourses = () => {
  const courses = [
    {
      id: 1,
      title: "HTML",
      progress: 70,
      duration: "5 Weeks",
      level: "Beginner",
    },
    {
      id: 2,
      title: "css",
      progress: 50,
      duration: "7 Weeks",
      level: "Beginner",
    },
    {
      id: 3,
      title: "javascript",
      progress: 30,
      duration: "10 Weeks",
      level: "Intermediate",
    },

    {
      id: 4,
      title: "React js",
      progress: 20,
      duration: "12 Weeks",
      level: "Intermediate",
    },
    {
      id: 5,
      title: "PHP",
      progress: 60,
      duration: "10 Weeks",
      level: "Intermediate",
    },
    {
      id: 6,
      title: "MY SQL",
      progress: 40,
      duration: "6 Weeks",
      level: "Intermediate",
    },
  ];
  return (
    <div className="my-courses-page">
      <h1>My Courses</h1>
      <p>Here you can see your enrolled courses.</p>

      <div className="my-courses-container">
        {courses.map((course) => (
          <div className="my-course-card" key={course.id}>
            <h2>{course.title}</h2>

            <p>⏱ Duration:{course.duration}</p>
            <p>📊 Level: {course.level}</p>
            <div className="course-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              <span>{course.progress}% Complete</span>
            </div>
            <Link to={`/lessons/${course.id}`} className="continue-btn">
              Continue Learning
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mycourses;
