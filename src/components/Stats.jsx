import React from "react";
import "./Stats.css";

const Stats = () => {
  const stats = [
    {
      number: "500+",
      title: "Students",
      icon: "👨‍🎓",
    },
    {
      number: "6",
      title: "Courses",
      icon: "📚",
    },
    {
      number: "100+",
      title: "Lessons",
      icon: "📝",
    },
    {
      number: "95%",
      title: "Success Rate",
      icon: "🏆",
    },
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{stat.icon}</div>

            <h2>{stat.number}</h2>

            <p>{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;