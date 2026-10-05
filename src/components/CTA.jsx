import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import "./CTA.css";

const CTA = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>{t.cta.title}</h2>

        <p>{t.cta.description}</p>

        <Link to="/courses">{t.cta.button}</Link>
      </div>
    </section>
  );
};

export default CTA;
