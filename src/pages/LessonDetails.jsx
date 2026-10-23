import React, { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useParams, useNavigate } from "react-router-dom";

import "./LessonDetails.css";

const LessonDetails = () => {
  // Get courseId and lessonId from URL
  const { courseId, lessonId } = useParams();

  // Used for Previous and Next Lesson
  const navigate = useNavigate();
  // give access to the translation function
  const { t, language } = useContext(LanguageContext);

  // All courses and their lessons
  const lessons = {
    1: {
      1: {
        title: {
          en: "Introduction to HTML",
          ps: "د HTML پېژندنه",
          fa: "مقدمه HTML",
        },
        content: {
          en: "HTML is used to create the structure of web pages.",
          ps: "HTML د ویب پاڼو د جوړښت جوړولو لپاره کارول کېږي.",
          fa: "HTML برای ایجاد ساختار صفحات وب استفاده می‌شود.",
        },
      },
      2: {
        title: {
          en: "HTML Elements and Tags",
          ps: "د HTML عناصر او ټګونه",
          fa: "عناصر و تگ‌های HTML",
        },
        content: {
          en: "HTML elements and tags are the basic building blocks of a web page.",
          ps: "د HTML عناصر او ټګونه د ویب پاڼې اساسي برخې دي.",
          fa: "عناصر و تگ‌های HTML بخش‌های اساسی یک صفحه وب هستند.",
        },
      },
      3: {
        title: {
          en: "HTML Forms",
          ps: "د HTML فورمونه",
          fa: "فورم‌های HTML",
        },
        content: {
          en: "HTML forms are used to collect information from users.",
          ps: "د HTML فورمونه د کاروونکو د معلوماتو راټولولو لپاره کارول کېږي.",
          fa: "فورم‌های HTML برای جمع‌آوری اطلاعات کاربران استفاده می‌شوند.",
        },
      },
      4: {
        title: {
          en: "HTML Tables",
          ps: "د HTML جدولونه",
          fa: "جدول‌های HTML",
        },
        content: {
          en: "HTML tables are used to display data in rows and columns.",
          ps: "د HTML جدولونه معلومات په قطارونو او ستونونو کې ښيي.",
          fa: "جدول‌های HTML اطلاعات را در سطرها و ستون‌ها نمایش می‌دهند.",
        },
      },
    },

    2: {
      1: {
        title: {
          en: "Introduction to CSS",
          ps: "د CSS پېژندنه",
          fa: "مقدمه CSS",
        },
        content: {
          en: "CSS is used to style and design web pages.",
          ps: "CSS د ویب پاڼو د ښکلا او ډیزاین لپاره کارول کېږي.",
          fa: "CSS برای زیباسازی و طراحی صفحات وب استفاده می‌شود.",
        },
      },
      2: {
        title: {
          en: "CSS Selectors",
          ps: "د CSS انتخابوونکي",
          fa: "انتخاب‌گرهای CSS",
        },
        content: {
          en: "CSS selectors are used to select HTML elements for styling.",
          ps: "د CSS انتخابوونکي د HTML عناصرو د ټاکلو لپاره کارول کېږي.",
          fa: "انتخاب‌گرهای CSS برای انتخاب عناصر HTML جهت استایل‌دهی استفاده می‌شوند.",
        },
      },
      3: {
        title: {
          en: "Colors and Backgrounds",
          ps: "رنګونه او شالیدونه",
          fa: "رنگ‌ها و پس‌زمینه‌ها",
        },
        content: {
          en: "Learn how to use colors and backgrounds in CSS.",
          ps: "زده کړئ چې په CSS کې رنګونه او شالیدونه څنګه وکاروئ.",
          fa: "یاد بگیرید که چگونه از رنگ‌ها و پس‌زمینه‌ها در CSS استفاده کنید.",
        },
      },
      4: {
        title: {
          en: "CSS Box Model",
          ps: "د CSS بکس ماډل",
          fa: "مدل جعبه‌ای CSS",
        },
        content: {
          en: "The CSS box model includes content, padding, border, and margin.",
          ps: "د CSS بکس ماډل محتوا، داخلي فاصله، چوکاټ او بهرنۍ فاصله لري.",
          fa: "مدل جعبه‌ای CSS شامل محتوا، فاصله داخلی، حاشیه و فاصله خارجی است.",
        },
      },
      5: {
        title: {
          en: "Flexbox",
          ps: "فلکس‌باکس",
          fa: "فلکس‌باکس",
        },
        content: {
          en: "Flexbox is used to create flexible and responsive layouts.",
          ps: "فلکس‌باکس د انعطاف وړ او ځواب ویونکي ډیزاین لپاره کارول کېږي.",
          fa: "فلکس‌باکس برای ایجاد طرح‌بندی‌های انعطاف‌پذیر و واکنش‌گرا استفاده می‌شود.",
        },
      },
    },

    3: {
      1: {
        title: {
          en: "Introduction to JavaScript",
          ps: "د JavaScript پېژندنه",
          fa: "مقدمه JavaScript",
        },
        content: {
          en: "JavaScript makes web pages interactive and dynamic.",
          ps: "JavaScript ویب پاڼې متقابلې او خوځنده کوي.",
          fa: "JavaScript صفحات وب را تعاملی و پویا می‌سازد.",
        },
      },
      2: {
        title: {
          en: "Variables and Data Types",
          ps: "متغیرونه او د معلوماتو ډولونه",
          fa: "متغیرها و انواع داده",
        },
        content: {
          en: "Learn about variables and common JavaScript data types.",
          ps: "د JavaScript متغیرونه او د معلوماتو عام ډولونه زده کړئ.",
          fa: "با متغیرها و انواع رایج داده در JavaScript آشنا شوید.",
        },
      },
      3: {
        title: {
          en: "Functions",
          ps: "فنکشنونه",
          fa: "توابع",
        },
        content: {
          en: "Functions allow you to organize and reuse JavaScript code.",
          ps: "فنکشنونه د JavaScript کوډ منظمولو او بیا کارولو کې مرسته کوي.",
          fa: "توابع به شما اجازه می‌دهند کد JavaScript را سازمان‌دهی و دوباره استفاده کنید.",
        },
      },
      4: {
        title: {
          en: "Arrays",
          ps: "ارېګانې",
          fa: "آرایه‌ها",
        },
        content: {
          en: "Arrays are used to store multiple values in JavaScript.",
          ps: "ارېګانې په JavaScript کې د څو ارزښتونو د ساتلو لپاره کارول کېږي.",
          fa: "آرایه‌ها برای ذخیره چندین مقدار در JavaScript استفاده می‌شوند.",
        },
      },
      5: {
        title: {
          en: "Objects",
          ps: "آبجکټونه",
          fa: "آبجکت‌ها",
        },
        content: {
          en: "Objects are used to store related data and properties.",
          ps: "آبجکټونه اړوند معلومات او ځانګړنې ساتي.",
          fa: "آبجکت‌ها برای نگهداری اطلاعات و ویژگی‌های مرتبط استفاده می‌شوند.",
        },
      },
    },

    4: {
      1: {
        title: {
          en: "Introduction to React JS",
          ps: "د React JS پېژندنه",
          fa: "مقدمه React JS",
        },
        content: {
          en: "React is a JavaScript library for building user interfaces.",
          ps: "React د کاروونکي د انترفېس جوړولو لپاره د JavaScript کتابتون دی.",
          fa: "React یک کتابخانه JavaScript برای ساخت رابط‌های کاربری است.",
        },
      },
      2: {
        title: {
          en: "Components",
          ps: "کمپوننټونه",
          fa: "کامپوننت‌ها",
        },
        content: {
          en: "Components are reusable building blocks in React.",
          ps: "کمپوننټونه په React کې د بیا کارولو وړ برخې دي.",
          fa: "کامپوننت‌ها بخش‌های قابل استفاده مجدد در React هستند.",
        },
      },
      3: {
        title: {
          en: "Props",
          ps: "پراپس",
          fa: "پراپس",
        },
        content: {
          en: "Props are used to pass data between React components.",
          ps: "پراپس د React کمپوننټونو ترمنځ د معلوماتو لېږلو لپاره کارول کېږي.",
          fa: "پراپس برای انتقال اطلاعات میان کامپوننت‌های React استفاده می‌شوند.",
        },
      },
      4: {
        title: {
          en: "State",
          ps: "سټېټ",
          fa: "استیت",
        },
        content: {
          en: "State allows React components to manage changing data.",
          ps: "سټېټ د React کمپوننټونو سره د بدلېدونکو معلوماتو په اداره کولو کې مرسته کوي.",
          fa: "استیت به کامپوننت‌های React اجازه می‌دهد اطلاعات متغیر را مدیریت کنند.",
        },
      },
      5: {
        title: {
          en: "React Hooks",
          ps: "د React هوکونه",
          fa: "هوک‌های React",
        },
        content: {
          en: "Hooks allow functional components to use React features.",
          ps: "هوکونه فنکشنل کمپوننټونو ته د React ځانګړنې د کارولو اجازه ورکوي.",
          fa: "هوک‌ها به کامپوننت‌های تابعی اجازه استفاده از ویژگی‌های React را می‌دهند.",
        },
      },
    },

    5: {
      1: {
        title: {
          en: "Introduction to PHP",
          ps: "د PHP پېژندنه",
          fa: "مقدمه PHP",
        },
        content: {
          en: "PHP is a server-side scripting language used for web development.",
          ps: "PHP د سرور اړخ سکریپټینګ ژبه ده چې د ویب پرمختګ لپاره کارول کېږي.",
          fa: "PHP یک زبان اسکریپت‌نویسی سمت سرور است که برای توسعه وب استفاده می‌شود.",
        },
      },
      2: {
        title: {
          en: "Variables and Data Types",
          ps: "متغیرونه او د معلوماتو ډولونه",
          fa: "متغیرها و انواع داده",
        },
        content: {
          en: "Learn how variables and data types work in PHP.",
          ps: "زده کړئ چې متغیرونه او د معلوماتو ډولونه په PHP کې څنګه کار کوي.",
          fa: "یاد بگیرید که متغیرها و انواع داده در PHP چگونه کار می‌کنند.",
        },
      },
      3: {
        title: {
          en: "PHP Functions",
          ps: "د PHP فنکشنونه",
          fa: "توابع PHP",
        },
        content: {
          en: "Functions help organize and reuse PHP code.",
          ps: "فنکشنونه د PHP کوډ په منظمولو او بیا کارولو کې مرسته کوي.",
          fa: "توابع به سازمان‌دهی و استفاده مجدد از کد PHP کمک می‌کنند.",
        },
      },
      4: {
        title: {
          en: "Forms in PHP",
          ps: "په PHP کې فورمونه",
          fa: "فورم‌ها در PHP",
        },
        content: {
          en: "PHP can process data submitted through forms.",
          ps: "PHP د فورمونو له لارې لېږل شوي معلومات پروسس کولی شي.",
          fa: "PHP می‌تواند اطلاعات ارسال‌شده از طریق فورم‌ها را پردازش کند.",
        },
      },
      5: {
        title: {
          en: "PHP Sessions",
          ps: "د PHP سېشنونه",
          fa: "سشن‌های PHP",
        },
        content: {
          en: "Sessions are used to store user information across pages.",
          ps: "سېشنونه د پاڼو ترمنځ د کاروونکي د معلوماتو ساتلو لپاره کارول کېږي.",
          fa: "سشن‌ها برای نگهداری اطلاعات کاربر میان صفحات استفاده می‌شوند.",
        },
      },
    },

    6: {
      1: {
        title: {
          en: "Introduction to MySQL",
          ps: "د MySQL پېژندنه",
          fa: "مقدمه MySQL",
        },
        content: {
          en: "MySQL is a relational database management system.",
          ps: "MySQL د اړیکه‌لرونکي ډیټابېس د مدیریت سیسټم دی.",
          fa: "MySQL یک سیستم مدیریت پایگاه داده رابطه‌ای است.",
        },
      },
      2: {
        title: {
          en: "Databases and Tables",
          ps: "ډیټابېسونه او جدولونه",
          fa: "پایگاه‌های داده و جدول‌ها",
        },
        content: {
          en: "Databases and tables are used to organize information.",
          ps: "ډیټابېسونه او جدولونه د معلوماتو د تنظیم لپاره کارول کېږي.",
          fa: "پایگاه‌های داده و جدول‌ها برای سازمان‌دهی اطلاعات استفاده می‌شوند.",
        },
      },
      3: {
        title: {
          en: "Primary Key and Foreign Key",
          ps: "پرایمري کی او فارن کی",
          fa: "کلید اصلی و کلید خارجی",
        },
        content: {
          en: "Keys are used to identify records and connect tables.",
          ps: "کیانې د ریکارډونو پېژندلو او جدولونو د نښلولو لپاره کارول کېږي.",
          fa: "کلیدها برای شناسایی رکوردها و ارتباط میان جدول‌ها استفاده می‌شوند.",
        },
      },
      4: {
        title: {
          en: "SQL Queries",
          ps: "د SQL پوښتنې",
          fa: "پرس‌وجوهای SQL",
        },
        content: {
          en: "SQL queries are used to retrieve and manage database data.",
          ps: "د SQL پوښتنې د ډیټابېس د معلوماتو ترلاسه کولو او مدیریت لپاره کارول کېږي.",
          fa: "پرس‌وجوهای SQL برای دریافت و مدیریت اطلاعات پایگاه داده استفاده می‌شوند.",
        },
      },
      5: {
        title: {
          en: "CRUD Operations",
          ps: "د CRUD عملیات",
          fa: "عملیات CRUD",
        },
        content: {
          en: "CRUD means Create, Read, Update, and Delete.",
          ps: "CRUD د جوړولو، لوستلو، تازه کولو او حذف کولو معنا لري.",
          fa: "CRUD به معنای ایجاد، خواندن، به‌روزرسانی و حذف است.",
        },
      },
    },
  };

  // Find the current lesson
  const lesson = lessons[courseId]?.[lessonId];
  const lessonTitle = lesson?.title?.[language] || lesson?.title?.en;
  const lessonContent = lesson?.content?.[language] || lesson?.content?.en;
  // Store lesson completion status
  const [completed, setCompleted] = useState(false);

  // Get total lessons of current course
  const totalLessons = Object.keys(lessons[courseId] || {}).length;

  // Convert lessonId from string to number
  const currentLesson = Number(lessonId);

  // Previous lesson number
  const previousLesson = currentLesson - 1;

  // Next lesson number
  const nextLesson = currentLesson + 1;

  // Calculate progress
  const progress = completed
    ? Math.round((currentLesson / totalLessons) * 100)
    : Math.round(((currentLesson - 1) / totalLessons) * 100);

  // If lesson does not exist
  if (!lesson) {
    return <h2>{t.lessonDetails.lessonNotFound}</h2>;
  }

  return (
    <div className="lesson-details">
      {/* Lesson number */}
      <h1>
        {t.lessonDetails.lesson} {lessonId}
      </h1>

      {/* Lesson title */}
      <h2>{lessonTitle}</h2>

      {/* Lesson content */}
      <p>{lessonContent}</p>

      {/* Progress section */}
      <div className="lesson-progress">
        <div className="progress-info">
          <span>
            {t.lessonDetails.lesson} {currentLesson} {t.lessonDetails.of}{" "}
            {totalLessons}
          </span>

          <span>{progress}%</span>
        </div>

        {/* Progress bar */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <button className="complete-btn" onClick={() => setCompleted(true)}>
        {completed
          ? `${t.lessonDetails.completed} ✓`
          : t.lessonDetails.markComplete}
      </button>

      {/* Previous and Next buttons */}
      <div className="lesson-navigation">
        {/* Previous Lesson */}
        {currentLesson > 1 && (
          <button
            onClick={() =>
              navigate(`/lessons/${courseId}/lesson/${previousLesson}`)
            }
          >
            ← {t.lessonDetails.previousLesson}
          </button>
        )}

        {/* Next Lesson */}
        {currentLesson < totalLessons && (
          <button
            onClick={() =>
              navigate(`/lessons/${courseId}/lesson/${nextLesson}`)
            }
          >
            {t.lessonDetails.nextLesson} →
          </button>
        )}
      </div>
      {/* Complete lesson */}
    </div>
  );
};

export default LessonDetails;
