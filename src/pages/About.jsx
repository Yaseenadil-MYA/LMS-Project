
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">

      <div className="about-header">
        <h1>About Our LMS</h1>

        <p>
          Learn new skills, improve your knowledge, and build
          your future with our online learning platform.
        </p>
      </div>

      <div className="about-container">

        <div className="about-content">
          <h2>Who We Are</h2>

          <p>
            Our Learning Management System is designed to provide
            students with an easy and modern way to learn online.
            Students can explore courses, learn new skills, and
            manage their learning journey from one platform.
          </p>

          <p>
            Our goal is to make online education simple, accessible,
            and useful for everyone.
          </p>
        </div>

        <div className="about-card">
          <h3>Why Choose Our LMS?</h3>

          <p>📚 Quality Courses</p>
          <p>👨‍🏫 Experienced Instructors</p>
          <p>💻 Learn Online</p>
          <p>📱 Responsive Design</p>
          <p>🎯 Learn at Your Own Pace</p>
        </div>

      </div>

      <div className="about-features">

        <div className="feature">
          <h3>100+</h3>
          <p>Students</p>
        </div>

        <div className="feature">
          <h3>20+</h3>
          <p>Courses</p>
        </div>

        <div className="feature">
          <h3>10+</h3>
          <p>Instructors</p>
        </div>

        <div className="feature">
          <h3>24/7</h3>
          <p>Learning</p>
        </div>

      </div>

    </section>
  );
};

export default About;