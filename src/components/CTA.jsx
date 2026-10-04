import React from "react";
import { Link } from "react-router-dom";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Ready to Start Learning?</h2>

        <p>
          Start your learning journey today and build new skills for your future.
        </p>

        <Link to="/courses">
          Explore Courses
        </Link>
      </div>
    </section>
  );
};

export default CTA;