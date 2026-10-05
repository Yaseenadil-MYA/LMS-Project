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
      title: "HTML",
      description: "Learn HTML and build modern web structure.",
      students: 110,
      duration: "5 Weeks",
      level: "Beginner",
    },
    {
      id: 3,
      title: "JavaScript",
      description: "Learn JavaScript from basic to advanced concepts.",
      students: 180,
      duration: "10 Weeks",
      level: "Intermediate",
    },
    {
      id: 4,
      title: "React JS",
      description: "Learn React JS and build modern web applications.",
      students: 120,
      duration: "8 Weeks",
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
              <span>👨‍🎓 {course.students} Students</span>
              <span>⏱ {course.duration}</span>
              <span>📊 {course.level}</span>
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
