
import React, { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import "./ManageLessons.css";

function ManageLessons() {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);

  // Translation
  const translations = {
    en: {
      title: "Manage Lessons",
      addLesson: "Add New Lesson",
      search: "Search lessons...",
      lessonTitle: "Lesson Title",
      course: "Course",
      duration: "Duration",
      actions: "Actions",
      add: "Add Lesson",
      edit: "Edit",
      delete: "Delete",
      cancel: "Cancel",
      save: "Save Changes",
      selectCourse: "Select Course",
    },
    ps: {
      title: "د درسونو مدیریت",
      addLesson: "نوی درس اضافه کړه",
      search: "درسونه ولټوه...",
      lessonTitle: "د درس نوم",
      course: "کورس",
      duration: "موده",
      actions: "عملیات",
      add: "درس اضافه کړه",
      edit: "سمول",
      delete: "حذف",
      cancel: "لغوه",
      save: "بدلونونه ثبت کړه",
      selectCourse: "کورس انتخاب کړه",
    },
    fa: {
      title: "مدیریت درس‌ها",
      addLesson: "افزودن درس جدید",
      search: "جستجوی درس‌ها...",
      lessonTitle: "عنوان درس",
      course: "کورس",
      duration: "مدت زمان",
      actions: "عملیات",
      add: "افزودن درس",
      edit: "ویرایش",
      delete: "حذف",
      cancel: "لغو",
      save: "ذخیره تغییرات",
      selectCourse: "انتخاب کورس",
    },
  };

  const t = translations[language] || translations.en;

  // Initial lessons
  const [lessons, setLessons] = useState([
    {
      id: 1,
      title: "HTML Introduction",
      course: "HTML",
      duration: "20 min",
    },
    {
      id: 2,
      title: "HTML Tags",
      course: "HTML",
      duration: "25 min",
    },
    {
      id: 3,
      title: "CSS Introduction",
      course: "CSS",
      duration: "30 min",
    },
    {
      id: 4,
      title: "JavaScript Variables",
      course: "JavaScript",
      duration: "35 min",
    },
    {
      id: 5,
      title: "React Components",
      course: "React",
      duration: "40 min",
    },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    course: "",
    duration: "",
  });

  // Search lessons
  const filteredLessons = lessons.filter(
    (lesson) =>
      lesson.title.toLowerCase().includes(search.toLowerCase()) ||
      lesson.course.toLowerCase().includes(search.toLowerCase())
  );

  // Input handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Open add form
  const handleAdd = () => {
    setEditingId(null);
    setFormData({ title: "", course: "", duration: "" });
    setShowForm(true);
  };

  // Open edit form
  const handleEdit = (lesson) => {
    setEditingId(lesson.id);
    setFormData({
      title: lesson.title,
      course: lesson.course,
      duration: lesson.duration,
    });
    setShowForm(true);
  };

  // Save lesson
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.course || !formData.duration) {
      alert("Please fill in all fields");
      return;
    }

    if (editingId !== null) {
      setLessons(
        lessons.map((lesson) =>
          lesson.id === editingId
            ? { ...lesson, ...formData }
            : lesson
        )
      );
    } else {
      const newLesson = {
        id: Date.now(),
        ...formData,
      };

      setLessons([...lessons, newLesson]);
    }

    setShowForm(false);
    setEditingId(null);
    setFormData({ title: "", course: "", duration: "" });
  };

  // Delete lesson
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this lesson?")) {
      setLessons(lessons.filter((lesson) => lesson.id !== id));
    }
  };

  return (
    <div
      className={`manage-lessons ${darkMode ? "dark-mode" : "light-mode"}`}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <div className="lessons-header">
        <h2>{t.title}</h2>

        <button className="add-lesson-btn" onClick={handleAdd}>
          + {t.addLesson}
        </button>
      </div>

      <input
        type="text"
        className="lesson-search"
        placeholder={t.search}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {showForm && (
        <form className="lesson-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder={t.lessonTitle}
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
            type="text"
            name="duration"
            placeholder={t.duration}
            value={formData.duration}
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

      <div className="lessons-table-container">
        <table className="lessons-table">
          <thead>
            <tr>
              <th>#</th>
              <th>{t.lessonTitle}</th>
              <th>{t.course}</th>
              <th>{t.duration}</th>
              <th>{t.actions}</th>
            </tr>
          </thead>

          <tbody>
            {filteredLessons.map((lesson, index) => (
              <tr key={lesson.id}>
                <td>{index + 1}</td>
                <td>{lesson.title}</td>
                <td>{lesson.course}</td>
                <td>{lesson.duration}</td>
                <td>
                  <button onClick={() => handleEdit(lesson)}>
                    {t.edit}
                  </button>

                  <button onClick={() => handleDelete(lesson.id)}>
                    {t.delete}
                  </button>
                </td>
              </tr>
            ))}

            {filteredLessons.length === 0 && (
              <tr>
                <td colSpan="5">No lessons found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageLessons;
