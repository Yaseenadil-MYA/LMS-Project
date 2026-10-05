import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./Stats.css";

const Stats = () => {
  const { t } = useContext(LanguageContext);
const stats = [
  {
    number: "500+",
    title: t.stats.students,
    icon: "👨‍🎓",
  },
  {
    number: "6",
    title: t.stats.courses,
    icon: "📚",
  },
  {
    number: "100+",
    title: t.stats.lessons,
    icon: "📝",
  },
  {
    number: "95%",
    title: t.stats.success,
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