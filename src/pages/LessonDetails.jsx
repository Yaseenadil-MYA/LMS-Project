import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./LessonDetails.css";

const LessonDetails = () => {
  // Get courseId and lessonId from URL
  const { courseId, lessonId } = useParams();

  // Used for Previous and Next Lesson
  const navigate = useNavigate();

  // All courses and their lessons
  const lessons = {
    // HTML
    1: {
      1: {
        title: "Introduction to HTML",
        content: "HTML is used to create the structure of web pages.",
      },
      2: {
        title: "HTML Elements and Tags",
        content:
          "HTML elements and tags are the basic building blocks of a web page.",
      },
      3: {
        title: "HTML Forms",
        content: "HTML forms are used to collect information from users.",
      },
      4: {
        title: "HTML Tables",
        content: "HTML tables are used to display data in rows and columns.",
      },
    },

    // CSS
    2: {
      1: {
        title: "Introduction to CSS",
        content: "CSS is used to style and design web pages.",
      },
      2: {
        title: "CSS Selectors",
        content: "CSS selectors are used to select HTML elements for styling.",
      },
      3: {
        title: "Colors and Backgrounds",
        content: "Learn how to use colors and backgrounds in CSS.",
      },
      4: {
        title: "CSS Box Model",
        content:
          "The CSS box model includes content, padding, border, and margin.",
      },
      5: {
        title: "Flexbox",
        content: "Flexbox is used to create flexible and responsive layouts.",
      },
    },

    // JavaScript
    3: {
      1: {
        title: "Introduction to JavaScript",
        content: "JavaScript makes web pages interactive and dynamic.",
      },
      2: {
        title: "Variables and Data Types",
        content: "Learn about variables and common JavaScript data types.",
      },
      3: {
        title: "Functions",
        content: "Functions allow you to organize and reuse JavaScript code.",
      },
      4: {
        title: "Arrays",
        content: "Arrays are used to store multiple values in JavaScript.",
      },
      5: {
        title: "Objects",
        content: "Objects are used to store related data and properties.",
      },
    },

    // React JS
    4: {
      1: {
        title: "Introduction to React JS",
        content: "React is a JavaScript library for building user interfaces.",
      },
      2: {
        title: "Components",
        content: "Components are reusable building blocks in React.",
      },
      3: {
        title: "Props",
        content: "Props are used to pass data between React components.",
      },
      4: {
        title: "State",
        content: "State allows React components to manage changing data.",
      },
      5: {
        title: "React Hooks",
        content: "Hooks allow functional components to use React features.",
      },
    },

    // PHP
    5: {
      1: {
        title: "Introduction to PHP",
        content:
          "PHP is a server-side scripting language used for web development.",
      },
      2: {
        title: "Variables and Data Types",
        content: "Learn how variables and data types work in PHP.",
      },
      3: {
        title: "PHP Functions",
        content: "Functions help organize and reuse PHP code.",
      },
      4: {
        title: "Forms in PHP",
        content: "PHP can process data submitted through forms.",
      },
      5: {
        title: "PHP Sessions",
        content: "Sessions are used to store user information across pages.",
      },
    },

    // MySQL
    6: {
      1: {
        title: "Introduction to MySQL",
        content: "MySQL is a relational database management system.",
      },
      2: {
        title: "Databases and Tables",
        content: "Databases and tables are used to organize information.",
      },
      3: {
        title: "Primary Key and Foreign Key",
        content: "Keys are used to identify records and connect tables.",
      },
      4: {
        title: "SQL Queries",
        content: "SQL queries are used to retrieve and manage database data.",
      },
      5: {
        title: "CRUD Operations",
        content: "CRUD means Create, Read, Update, and Delete.",
      },
    },
  };

  // Find the current lesson
  const lesson = lessons[courseId]?.[lessonId];

  // Store lesson completion status
  const [completed, setCompleted] = useState(false);

  // Get total lessons of current course
  const totalLessons = Object.keys(lessons[courseId] || {}).length;

  // Convert lessonId from string to number
  const currentLesson = Number(lessonId);

  // Previous lesson number
  const previousLesson = currentLesson - 1;

  // Next lesson number
  const nextLesson = currentLesson + 1;

  // Calculate progress
  const progress = completed
    ? Math.round((currentLesson / totalLessons) * 100)
    : Math.round(((currentLesson - 1) / totalLessons) * 100);

  // If lesson does not exist
  if (!lesson) {
    return <h2>Lesson not found</h2>;
  }

  return (
    <div className="lesson-details">
      {/* Lesson number */}
      <h1>Lesson {lessonId}</h1>

      {/* Lesson title */}
      <h2>{lesson.title}</h2>

      {/* Lesson content */}
      <p>{lesson.content}</p>

      {/* Progress section */}
      <div className="lesson-progress">
        <div className="progress-info">
          <span>
            Lesson {currentLesson} of {totalLessons}
          </span>

          <span>{progress}%</span>
        </div>

        {/* Progress bar */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <button className="complete-btn" onClick={() => setCompleted(true)}>
        {completed ? "Completed ✓" : "Mark as Complete"}
      </button>

      {/* Previous and Next buttons */}
      <div className="lesson-navigation">
        {/* Previous Lesson */}
        {currentLesson > 1 && (
          <button
            onClick={() =>
              navigate(`/lessons/${courseId}/lesson/${previousLesson}`)
            }
          >
            ← Previous Lesson
          </button>
        )}

        {/* Next Lesson */}
        {currentLesson < totalLessons && (
          <button
            onClick={() =>
              navigate(`/lessons/${courseId}/lesson/${nextLesson}`)
            }
          >
            Next Lesson →
          </button>
        )}
      </div>
      {/* Complete lesson */}
    </div>
  );
};

export default LessonDetails;
