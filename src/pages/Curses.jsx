import React from "react";
import "./CoursesPage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Curses = () => {
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
      id: 2,
      title: t.courses.css.title,
      description: t.courses.css.description,
      students: 130,
      duration: "7 ",
      level: "Beginner",
    },
    {
      id: 3,
      title: t.courses.react.title,
      description: t.courses.react.description,
      students: 120,
      duration: "8",
      level: "Begninnr",
    },
    {
      id: 4,
      title: t.courses.javascript.title,
      description: t.courses.javascript.description,
      students: 100,
      duration: "10",
      level: "ّIntermediate",
    },
    {
      id: 5,
      title: t.courses.php.title,
      description: t.courses.php.description,
      students: 90,
      duration: "10",
      level: "Bignner",
    },
    {
      id: 6,
      title: t.courses.mysql.title,
      description: t.courses.mysql.description,
      students: 90,
      duration: "6",
      level: "Beginner",
    },
  ];
  return (
    <main className="courses-page">
      <h1>{t.courses.title}</h1>
      <p>{t.courses.description}</p>

      <div className="cours-container">
        {courses.map((course) => (
          <div className="cours-cards" key={course.title}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <div className="cours-inpo">
              <p>
                👨‍🎓 {course.students} {t.courses.students}
              </p>
              <p>
                ⏱ {course.duration} {t.courses.weeks}
              </p>
              <p>
                📊{" "}
                {course.level === "Beginner"
                  ? t.courses.beginner
                  : t.courses.intermediate}
              </p>
            </div>
            <Link to={`/courses/${course.id}`}>
              <button>{t.courses.viewCourse}</button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Curses;
