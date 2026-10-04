import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "📚",
      title: "Quality Courses",
      description: "Learn useful skills through well-structured courses.",
    },
    {
      icon: "👨‍🎓",
      title: "Learn at Your Pace",
      description: "Study anytime and continue learning at your own pace.",
    },
    {
      icon: "💻",
      title: "Practical Learning",
      description: "Practice what you learn and build real projects.",
    },
    {
      icon: "🏆",
      title: "Track Your Progress",
      description: "Monitor your learning progress and complete lessons.",
    },
  ];

  return (
    <section className="why-choose">
      <div className="why-header">
        <h2>Why Choose Our LMS?</h2>
        <p>
          Everything you need to learn new skills and achieve your goals.
        </p>
      </div>

      <div className="why-container">
        {features.map((feature, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;