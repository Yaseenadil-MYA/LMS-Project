import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import "./PopularCourses.css";

const PopularCourses = () => {
  const { t } = useContext(LanguageContext);
  const courses = [
    {
      id: 1,

      title: t.courses.html.title,
      description: t.courses.html.description,
      students: 110,
      duration: "5",
      level: "Beginner",
    },
    {
      id: 3,
      title: t.courses.javascript.title,
      description: t.courses.javascript.description,
      students: 180,
      duration: "10",
      level: "Intermediate",
    },
    {
      id: 4,
      title: t.courses.react.title,
      description: t.courses.react.description,
      students: 120,
      duration: "8",
      level: "Beginner",
    },
  ];

  return (
    <section className="popular-courses">
      <h2>{t.popularCourses.title}</h2>
      <p>{t.popularCourses.description}</p>

      <div className="popular-container">
        {courses.map((course) => (
          <div className="popular-card" key={course.id}>
            <h3>{course.title}</h3>

            <p>{course.description}</p>

            <div>
              <span>👨‍🎓 {course.students}</span>
              <span>
                {" "}
                ⏱ {course.duration} {t.courses.weeks}
              </span>
              <span>
                {" "}
                📊{" "}
                {course.level === "Beginner"
                  ? t.courses.beginner
                  : t.courses.intermediate}
              </span>
            </div>

            <Link to={`/courses/${course.id}`}>
              {t.popularCourses.viewCourse}
            </Link>
          </div>
        ))}
      </div>

      <div className="view-all-courses">
        <Link to="/courses">{t.popularCourses.viewAll}</Link>
      </div>
    </section>
  );
};

export default PopularCourses;
