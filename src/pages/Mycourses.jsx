import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./Mycourses.css";
import { Link } from "react-router-dom";

const Mycourses = () => {
  const { t } = useContext(LanguageContext);
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
      <h1>{t.myCourses.title}</h1>
      <p>{t.myCourses.description}</p>

      <div className="my-courses-container">
        {courses.map((course) => (
          <div className="my-course-card" key={course.id}>
            <h2>{course.title}</h2>

            <p>
              ⏱ {t.myCourses.duration}: {course.duration.split(" ")[0]}{" "}
              {t.myCourses.weeks}
            </p>

            <p>
              📊 {t.myCourses.level}:{" "}
              {course.level === "Beginner"
                ? t.myCourses.beginner
                : t.myCourses.intermediate}
            </p>
            <div className="course-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              <span>
                {course.progress}% {t.myCourses.complete}
              </span>
            </div>
            <Link to={`/lessons/${course.id}`} className="continue-btn">
              {t.myCourses.continueLearning}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mycourses;
