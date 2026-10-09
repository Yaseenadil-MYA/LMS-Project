import React, { useContext } from "react";
import "./Contect.css";
import { LanguageContext } from "../context/LanguageContext";

const Contect = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="contact">
      <div className="contact-header">
        <h1>{t.contact.title}</h1>
        <p>{t.contact.description}</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>{t.contact.getInTouch}</h2>

          <p>{t.contact.infoText}</p>

          <div className="contact-item">
            <h3>📧 {t.contact.email}</h3>
            <p>mohammadyaseenfahim12@gmil.com</p>
          </div>

          <div className="contact-item">
            <h3>📞 {t.contact.phone}</h3>
            <p>+93 786517586</p>
          </div>

          <div className="contact-item">
            <h3>📍 {t.contact.address}</h3>
            <p>Afghanistan</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>{t.contact.sendMessage}</h2>

          <form>
            <label>{t.contact.name}</label>
            <input type="text" placeholder={t.contact.namePlaceholder} />

            <label>{t.contact.email}</label>
            <input type="email" placeholder={t.contact.emailPlaceholder} />

            <label>{t.contact.subject}</label>
            <input type="text" placeholder={t.contact.subjectPlaceholder} />

            <label>{t.contact.message}</label>
            <textarea
              rows="6"
              placeholder={t.contact.messagePlaceholder}
            ></textarea>

            <button type="submit">{t.contact.sendButton}</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contect;
