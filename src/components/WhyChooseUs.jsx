import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const { t } = useContext(LanguageContext);
  const features = [
    {
      icon: "📚",
      title: t.whyChoose.quality,
      description: t.whyChoose.qualityText,
    },
    {
      icon: "👨‍🎓",
      title: t.whyChoose.pace,
      description: t.whyChoose.paceText,
    },
    {
      icon: "💻",
      title: t.whyChoose.practical,
      description: t.whyChoose.practicalText,
    },
    {
      icon: "🏆",
      title: t.whyChoose.progress,
      description: t.whyChoose.progressText,
    },
  ];

  return (
    <section className="why-choose">
      <div className="why-header">
        <h2>{t.whyChoose.title}</h2>
        <p>{t.whyChoose.description}</p>
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
