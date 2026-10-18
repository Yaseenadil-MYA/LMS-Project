
import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link, useParams } from "react-router-dom";

import "./Lessons.css";

const Lessons = () => {
const { t, language } = useContext(LanguageContext);
  const { id } = useParams();

const courseLessons = {
  1: [
    { en: "Introduction to HTML", ps: "د HTML پېژندنه", fa: "مقدمه HTML" },
    { en: "HTML Elements and Tags", ps: "د HTML عناصر او ټګونه", fa: "عناصر و تگ‌های HTML" },
    { en: "HTML Forms", ps: "د HTML فورمونه", fa: "فورم‌های HTML" },
    { en: "HTML Tables", ps: "د HTML جدولونه", fa: "جدول‌های HTML" },
  ],

  2: [
    { en: "Introduction to CSS", ps: "د CSS پېژندنه", fa: "مقدمه CSS" },
    { en: "CSS Selectors", ps: "د CSS انتخابوونکي", fa: "انتخاب‌گرهای CSS" },
    { en: "Colors and Backgrounds", ps: "رنګونه او شالیدونه", fa: "رنگ‌ها و پس‌زمینه‌ها" },
    { en: "CSS Box Model", ps: "د CSS بکس ماډل", fa: "مدل جعبه‌ای CSS" },
    { en: "Flexbox", ps: "فلکس‌باکس", fa: "فلکس‌باکس" },
  ],

  3: [
    { en: "Introduction to JavaScript", ps: "د JavaScript پېژندنه", fa: "مقدمه JavaScript" },
    { en: "Variables and Data Types", ps: "متغیرونه او د معلوماتو ډولونه", fa: "متغیرها و انواع داده" },
    { en: "Functions", ps: "فنکشنونه", fa: "توابع" },
    { en: "Arrays", ps: "ارېګانې", fa: "آرایه‌ها" },
    { en: "Objects", ps: "آبجکټونه", fa: "آبجکت‌ها" },
  ],

  4: [
    { en: "Introduction to React JS", ps: "د React JS پېژندنه", fa: "مقدمه React JS" },
    { en: "Components", ps: "کمپوننټونه", fa: "کامپوننت‌ها" },
    { en: "Props", ps: "پراپس", fa: "پراپس" },
    { en: "State", ps: "سټېټ", fa: "استیت" },
    { en: "React Hooks", ps: "د React هوکونه", fa: "هوک‌های React" },
  ],

  5: [
    { en: "Introduction to PHP", ps: "د PHP پېژندنه", fa: "مقدمه PHP" },
    { en: "Variables and Data Types", ps: "متغیرونه او د معلوماتو ډولونه", fa: "متغیرها و انواع داده" },
    { en: "PHP Functions", ps: "د PHP فنکشنونه", fa: "توابع PHP" },
    { en: "Forms in PHP", ps: "په PHP کې فورمونه", fa: "فورم‌ها در PHP" },
    { en: "PHP Sessions", ps: "د PHP سېشنونه", fa: "سشن‌های PHP" },
  ],

  6: [
    { en: "Introduction to MySQL", ps: "د MySQL پېژندنه", fa: "مقدمه MySQL" },
    { en: "Databases and Tables", ps: "ډیټابېسونه او جدولونه", fa: "پایگاه‌های داده و جدول‌ها" },
    { en: "Primary Key and Foreign Key", ps: "پرایمري کی او فارن کی", fa: "کلید اصلی و کلید خارجی" },
    { en: "SQL Queries", ps: "د SQL پوښتنې", fa: "پرس‌وجوهای SQL" },
    { en: "CRUD Operations", ps: "د CRUD عملیات", fa: "عملیات CRUD" },
  ],
};

const lessons = courseLessons[id] || [];

const getLessonTitle = (lesson) => {
  return lesson[language] || lesson.en;
};

  return (
    <div className="lessons-page">

     <h1>{t.lessons.title}</h1>

     <p>{t.lessons.description}</p>

      <div className="lessons-container">

        {lessons.map((lesson, index) => (

          <div className="lesson-card" key={index}>

            <div>
              <h2>
               {index + 1}. {getLessonTitle(lesson)}
              </h2>

              <p>
               {t.lessons.lesson} {index + 1}
              </p>
            </div>

         <Link
  to={`/lessons/${id}/lesson/${index + 1}`}
  className="start-lesson-btn"
>
  {t.lessons.startLesson}
</Link>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Lessons;