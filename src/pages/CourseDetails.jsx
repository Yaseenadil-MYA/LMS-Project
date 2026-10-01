import React from "react";
import { Link, useParams } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = () => {
  const { id } = useParams();
  //enroll button.
  const handleEnroll = () => {
    alert(`You have enrolled in ${course.title} course!`);
  };

  const courses = [
    {
      id: 1,
      title: "HTML",
      description:
        "Learn HTML and build modern web structure from the beginning.",
      students: 110,
      duration: "5 Weeks",
      level: "Beginner",
      instructor: "Eng:Rafiq",
      lessons: 25,
      price: "$20",
      learn: [
        "HTML Basics",
        "HTML Elements",
        "HTML Forms",
        "HTML Tables",
        "Semantic HTML",
      ],
    },

    {
      id: 2,
      title: "CSS",
      description:
        "Learn CSS and create beautiful, responsive and modern websites.",
      students: 130,
      duration: "7 Weeks",
      level: "Beginner",
      instructor: "Eng:qadeer hariri",
      lessons: 35,
      price: "$25",
      learn: [
        "CSS Basics",
        "Selectors",
        "Flexbox",
        "Grid",
        "Responsive Design",
      ],
    },

    {
      id: 3,
      title: "JavaScript",
      description:
        "Learn JavaScript from basic concepts to advanced programming topics.",
      students: 180,
      duration: "10 Weeks",
      level: "Intermediate",
      instructor: "Eng:zahid shirzad",
      lessons: 50,
      price: "$40",
      learn: [
        "JavaScript Basics",
        "Variables and Data Types",
        "Functions",
        "Arrays and Objects",
        "DOM Manipulation",
      ],
    },

    {
      id: 4,
      title: "React JS",
      description:
        "Learn React JS and build modern and interactive web applications.",
      students: 120,
      duration: "8 Weeks",
      level: "Beginner",
      instructor: "Eng:ataullah Arabzi",
      lessons: 40,
      price: "$35",
      learn: ["React Components", "Props", "State", "Hooks", "React Router"],
    },

    {
      id: 5,
      title: "PHP",
      description:
        "Learn PHP and build powerful backend applications and websites.",
      students: 100,
      duration: "8 Weeks",
      level: "Beginner",
      instructor: "Eng: Yasin Adil",
      lessons: 40,
      price: "$30",
      learn: [
        "PHP Basics",
        "Variables",
        "Functions",
        "Forms",
        "Sessions and Cookies",
      ],
    },

    {
      id: 6,
      title: "MySQL",
      description: "Learn MySQL and manage databases professionally.",
      students: 90,
      duration: "6 Weeks",
      level: "Beginner",
      instructor: "Eng: Yasin Adil",
      lessons: 30,
      price: "$25",
      learn: [
        "Database Basics",
        "Tables",
        "SQL Queries",
        "Insert and Update Data",
        "Relationships",
      ],
    },
  ];

  const course = courses.find((course) => course.id === Number(id));

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Course Not Found</h2>
        <Link to="/courses">Back to Courses</Link>
      </div>
    );
  }

  return (
    <section className="course-details">
      <div className="details-header">
        <h1>{course.title}</h1>

        <p>{course.description}</p>
      </div>

      <div className="details-container">
        <div className="details-main">
          <h2>About This Course</h2>

          <p>{course.description}</p>

          <h2>What You Will Learn</h2>

          <ul>
            {course.learn.map((item, index) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>
        </div>

        <div className="details-card">
          <h2>{course.title}</h2>

          <p>👨‍🎓 Students: {course.students}</p>

          <p>⏱ Duration: {course.duration}</p>

          <p>📊 Level: {course.level}</p>

          <p>👨‍🏫 Instructor: {course.instructor}</p>

          <p>📚 Lessons: {course.lessons}</p>

          <h2>{course.price}</h2>

          <button onClick={handleEnroll}>Enroll Now</button>

          <Link to="/courses">
            <button>Back to Courses</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
