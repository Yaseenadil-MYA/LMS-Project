
import React, { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import "./ManageQuizzes.css";

function ManageQuizzes() {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);

  // Translations
  const translations = {
    en: {
      title: "Manage Quizzes",
      addQuiz: "Add New Quiz",
      search: "Search quizzes...",
      quizTitle: "Quiz Title",
      course: "Course",
      questions: "Questions",
      actions: "Actions",
      add: "Add Quiz",
      edit: "Edit",
      delete: "Delete",
      cancel: "Cancel",
      save: "Save Changes",
      selectCourse: "Select Course",
      noQuizzes: "No quizzes found",
    },
    ps: {
      title: "د ازموینو مدیریت",
      addQuiz: "نوې ازموینه اضافه کړه",
      search: "ازموینې ولټوه...",
      quizTitle: "د ازموینې نوم",
      course: "کورس",
      questions: "پوښتنې",
      actions: "عملیات",
      add: "ازموینه اضافه کړه",
      edit: "سمول",
      delete: "حذف",
      cancel: "لغوه",
      save: "بدلونونه ثبت کړه",
      selectCourse: "کورس انتخاب کړه",
      noQuizzes: "ازموینه ونه موندل شوه",
    },
    fa: {
      title: "مدیریت آزمون‌ها",
      addQuiz: "افزودن آزمون جدید",
      search: "جستجوی آزمون‌ها...",
      quizTitle: "عنوان آزمون",
      course: "کورس",
      questions: "پرسش‌ها",
      actions: "عملیات",
      add: "افزودن آزمون",
      edit: "ویرایش",
      delete: "حذف",
      cancel: "لغو",
      save: "ذخیره تغییرات",
      selectCourse: "انتخاب کورس",
      noQuizzes: "آزمونی پیدا نشد",
    },
  };

  const t = translations[language] || translations.en;

  // Initial quiz data
  const [quizzes, setQuizzes] = useState([
    {
      id: 1,
      title: "HTML Basics Quiz",
      course: "HTML",
      questions: 10,
    },
    {
      id: 2,
      title: "CSS Fundamentals",
      course: "CSS",
      questions: 15,
    },
    {
      id: 3,
      title: "JavaScript Basics",
      course: "JavaScript",
      questions: 12,
    },
    {
      id: 4,
      title: "React Components Quiz",
      course: "React",
      questions: 10,
    },
    {
      id: 5,
      title: "PHP Basics Quiz",
      course: "PHP",
      questions: 8,
    },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    course: "",
    questions: "",
  });

  // Search quizzes
  const filteredQuizzes = quizzes.filter(
    (quiz) =>
      quiz.title.toLowerCase().includes(search.toLowerCase()) ||
      quiz.course.toLowerCase().includes(search.toLowerCase())
  );

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Open add form
  const handleAdd = () => {
    setEditingId(null);
    setFormData({ title: "", course: "", questions: "" });
    setShowForm(true);
  };

  // Open edit form
  const handleEdit = (quiz) => {
    setEditingId(quiz.id);
    setFormData({
      title: quiz.title,
      course: quiz.course,
      questions: quiz.questions,
    });
    setShowForm(true);
  };

  // Save quiz
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.course || !formData.questions) {
      alert("Please fill in all fields");
      return;
    }

    const quizData = {
      ...formData,
      questions: Number(formData.questions),
    };

    if (quizData.questions < 1 || !Number.isInteger(quizData.questions)) {
      alert("Please enter a valid number of questions");
      return;
    }

    if (editingId !== null) {
      setQuizzes(
        quizzes.map((quiz) =>
          quiz.id === editingId ? { ...quiz, ...quizData } : quiz
        )
      );
    } else {
      setQuizzes([
        ...quizzes,
        {
          id: Date.now(),
          ...quizData,
        },
      ]);
    }

    setShowForm(false);
    setEditingId(null);
    setFormData({ title: "", course: "", questions: "" });
  };

  // Delete quiz
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
    }
  };

  return (
    <div
      className={`manage-quizzes ${darkMode ? "dark-mode" : "light-mode"}`}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <div className="quizzes-header">
        <h2>{t.title}</h2>

        <button className="add-quiz-btn" onClick={handleAdd}>
          + {t.addQuiz}
        </button>
      </div>

      <input
        type="text"
        className="quiz-search"
        placeholder={t.search}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {showForm && (
        <form className="quiz-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder={t.quizTitle}
            value={formData.title}
            onChange={handleChange}
          />

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">{t.selectCourse}</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="PHP">PHP</option>
            <option value="MySQL">MySQL</option>
          </select>

          <input
            type="number"
            name="questions"
            min="1"
            placeholder={t.questions}
            value={formData.questions}
            onChange={handleChange}
          />

          <button type="submit">
            {editingId !== null ? t.save : t.add}
          </button>

          <button
            type="button"
            onClick={() => setShowForm(false)}
          >
            {t.cancel}
          </button>
        </form>
      )}

      <div className="quizzes-table-container">
        <table className="quizzes-table">
          <thead>
            <tr>
              <th>#</th>
              <th>{t.quizTitle}</th>
              <th>{t.course}</th>
              <th>{t.questions}</th>
              <th>{t.actions}</th>
            </tr>
          </thead>

          <tbody>
            {filteredQuizzes.map((quiz, index) => (
              <tr key={quiz.id}>
                <td>{index + 1}</td>
                <td>{quiz.title}</td>
                <td>{quiz.course}</td>
                <td>{quiz.questions}</td>
                <td>
                  <button onClick={() => handleEdit(quiz)}>
                    {t.edit}
                  </button>

                  <button onClick={() => handleDelete(quiz.id)}>
                    {t.delete}
                  </button>
                </td>
              </tr>
            ))}

            {filteredQuizzes.length === 0 && (
              <tr>
                <td colSpan="5">{t.noQuizzes}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageQuizzes;
