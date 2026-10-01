import React from "react";
import "./CoursesPage.css";
import { Link } from "react-router-dom";

const courses = () => {
  const courses = [
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
      title: "React js",
      description: "learn react js and build modern web Application.",
      student: 120,
      duration: "8 weeks",
      level: "Begninnr",
    },
    {
      id: 4,
      title: "javascript",
      description: "learn javascript from basic to advance cencept.",
      student: 100,
      duration: "10 weeks",
      level: "intermediate",
    },
    {
      id: 5,
      title: "PHP",
      description: "learn php from basic to advance cencept.",
      student:90,
      duration: "10 weeks",
      level: "Bignner",
    },
    {
      id: 6,
      title: "MySQL",
      description: "Learn MySQL and manage databases professionally.",
      students: 90,
      duration: "6 Weeks",
      level: "Beginner",
    },
  ];
  return (
    <main className="courses-page">
      <h1>Our courses</h1>
      <p>Explor our courses and start lerning new skills.</p>

      <div className="cours-container">
        {courses.map((course) => (
          <div className="cours-cards" key={course.title}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <div className="cours-inpo">
              <p>👨‍🎓 {course.students} Students</p>
              <p>⏱ {course.duration}</p>
              <p>📊 {course.level}</p>
            </div>
            <Link to={`/courses/${course.id}`}>
            
            <button>View Courses</button>
            </Link>
         
         
          </div>
        ))}
      </div>
    </main>
  );
};

export default courses;
