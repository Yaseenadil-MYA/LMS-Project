
import React from "react";
import { Link, useParams } from "react-router-dom";

import "./Lessons.css";

const Lessons = () => {
  const { id } = useParams();

  const courseLessons = {
    1: [
      "Introduction to HTML",
      "HTML Elements and Tags",
      "HTML Forms",
      "HTML Tables",
    ],

    2: [
      "Introduction to CSS",
      "CSS Selectors",
      "Colors and Backgrounds",
      "CSS Box Model",
      "Flexbox",
    ],

    3: [
      "Introduction to JavaScript",
      "Variables and Data Types",
      "Functions",
      "Arrays",
      "Objects",
    ],

    4: [
      "Introduction to React JS",
      "Components",
      "Props",
      "State",
      "React Hooks",
    ],

    5: [
      "Introduction to PHP",
      "Variables and Data Types",
      "PHP Functions",
      "Forms in PHP",
      "PHP Sessions",
    ],

    6: [
      "Introduction to MySQL",
      "Databases and Tables",
      "Primary Key and Foreign Key",
      "SQL Queries",
      "CRUD Operations",
    ],
  };

  const lessons = courseLessons[id] || [];

  return (
    <div className="lessons-page">

      <h1>Course Lessons</h1>

      <p>Learn step by step and improve your skills.</p>

      <div className="lessons-container">

        {lessons.map((lesson, index) => (

          <div className="lesson-card" key={index}>

            <div>
              <h2>
                {index + 1}. {lesson}
              </h2>

              <p>
                Lesson {index + 1}
              </p>
            </div>

            <Link
              to={`/lessons/${id}/lesson/${index + 1}`}
              className="start-lesson-btn"
            >
              Start Lesson
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Lessons;