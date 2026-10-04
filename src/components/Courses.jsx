import React from "react";
import "./Courses.css";
import { Link } from "react-router-dom";

const Courses = () => {
  const Courses = [
    {
      id: 1,
      title: "HTML",
      description: "Learn HTML and build modern web Sructrue.",
      students: 110,
      duration: "5 Weeks",
      level: "Beginner",
    },
    {
      id: 2,
      title: "CSS",
      description: "Learn CSS and build modern website.",
      students: 130,
      duration: "7 Weeks",
      level: "Beginner",
    },
    {
      id: 3,
      title: "JavaScript",
      description: "Learn JavaScript from basic concepts to advanced topics.",
      students: 180,
      duration: "10 Weeks",
      level: "Intermediate",
    },
  
    
  ];
  return (
    <section className="courses">
      <div className="course-heder">
        <h2>Our Courses.</h2>
        <p>Explor Our popular courses and start learning today.</p>
      </div>

      <div className="course-container">
        {Courses.map((course) => (
          <div className="course-card" key={course.title}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="course-info">
              <p>👨‍🎓 {course.students} Students</p>
              <p>⏱ {course.duration}</p>
              <p>📊 {course.level}</p>
            </div>
            <Link to={`/courses/${course.id}`}>
              <button>View Course</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
