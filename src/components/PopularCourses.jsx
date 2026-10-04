import React from "react";
import { Link } from "react-router-dom";
import "./PopularCourses.css";

const PopularCourses = () => {
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
      <h2>Popular Courses</h2>
      <p>Start learning with our most popular courses.</p>

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
              View Course
            </Link>
          </div>
        ))}
      </div>

      <div>
        <Link to="/courses">View All Courses</Link>
      </div>
    </section>
  );
};

export default PopularCourses;