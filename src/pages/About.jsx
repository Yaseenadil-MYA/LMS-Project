import React, { useContext } from "react";
import "./About.css";
import { LanguageContext } from "../context/LanguageContext";

const About = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="about">
      <div className="about-header">
        <h1>{t.about.title}</h1>

        <p>{t.about.description}</p>
      </div>

      <div className="about-container">
        <div className="about-content">
          <h2>{t.about.whoWeAre}</h2>
          <p>{t.about.whoWeAreText1}</p>
          <p>{t.about.whoWeAreText2}</p>
        </div>

        <div className="about-card">
          <h3>{t.about.whyChoose}</h3>
          <p>📚 {t.about.qualityCourses}</p>
          <p>👨‍🏫 {t.about.experiencedInstructors}</p>
          <p>💻 {t.about.learnOnline}</p>
          <p>📱 {t.about.responsiveDesign}</p>
          <p>🎯 {t.about.learnAtYourPace}</p>
        </div>
      </div>

      <div className="about-features">
        <div className="feature">
          <h3>100+</h3>
          <p>{t.about.students}</p>
        </div>

        <div className="feature">
          <h3>20+</h3>
          <p>{t.about.courses}</p>
        </div>

        <div className="feature">
          <h3>10+</h3>
          <p>{t.about.instructors}</p>
        </div>

        <div className="feature">
          <h3>24/7</h3>
          <p>{t.about.learning}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
