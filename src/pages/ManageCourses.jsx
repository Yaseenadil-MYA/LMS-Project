import React, { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import "./ManageCourses.css";

function ManageCourses() {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);

  // Translation
  const translations = {
    en: {
      title: "Manage Courses",
      addCourse: "Add Course",
      editCourse: "Edit Course",
      courseName: "Course Name",
      description: "Description",
      duration: "Duration",
      level: "Level",
      students: "Students",
      actions: "Actions",
      save: "Save",
      cancel: "Cancel",
      edit: "Edit",
      delete: "Delete",
      search: "Search courses...",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      confirmDelete: "Are you sure you want to delete this course?",
      noCourses: "No courses found.",
    },
    ps: {
      title: "د کورسونو مدیریت",
      addCourse: "کورس اضافه کړئ",
      editCourse: "کورس اصلاح کړئ",
      courseName: "د کورس نوم",
      description: "تشریح",
      duration: "موده",
      level: "کچه",
      students: "زده کوونکي",
      actions: "فعالیتونه",
      save: "ثبت",
      cancel: "لغوه",
      edit: "اصلاح",
      delete: "حذف",
      search: "کورسونه ولټوئ...",
      beginner: "ابتدايي",
      intermediate: "منځنۍ",
      advanced: "پرمختللې",
      confirmDelete: "آیا غواړئ دا کورس حذف کړئ؟",
      noCourses: "کوم کورس ونه موندل شو.",
    },
    fa: {
      title: "مدیریت دوره‌ها",
      addCourse: "افزودن دوره",
      editCourse: "ویرایش دوره",
      courseName: "نام دوره",
      description: "توضیحات",
      duration: "مدت",
      level: "سطح",
      students: "دانشجویان",
      actions: "عملیات",
      save: "ذخیره",
      cancel: "لغو",
      edit: "ویرایش",
      delete: "حذف",
      search: "جستجوی دوره‌ها...",
      beginner: "مبتدی",
      intermediate: "متوسط",
      advanced: "پیشرفته",
      confirmDelete: "آیا مطمئن هستید که این دوره حذف شود؟",
      noCourses: "دوره‌ای پیدا نشد.",
    },
  };

  const t = translations[language] || translations.en;

  // Initial sample courses
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "HTML",
      description: "Learn HTML fundamentals",
      duration: "5 Weeks",
      level: "beginner",
      students: 110,
    },
    {
      id: 2,
      name: "CSS",
      description: "Learn CSS styling",
      duration: "7 Weeks",
      level: "beginner",
      students: 130,
    },
    {
      id: 3,
      name: "JavaScript",
      description: "Learn JavaScript programming",
      duration: "10 Weeks",
      level: "intermediate",
      students: 180,
    },
    {
      id: 4,
      name: "React",
      description: "Learn React development",
      duration: "8 Weeks",
      level: "intermediate",
      students: 120,
    },
    {
      id: 5,
      name: "PHP",
      description: "Learn PHP backend development",
      duration: "8 Weeks",
      level: "intermediate",
      students: 95,
    },
    {
      id: 6,
      name: "MySQL",
      description: "Learn database management",
      duration: "6 Weeks",
      level: "beginner",
      students: 85,
    },
  ]);

  const emptyForm = {
    name: "",
    description: "",
    duration: "",
    level: "beginner",
    students: 0,
  };

  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Update form fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "students" ? Number(value) : value,
    }));
  };

  // Add or update course
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.description.trim()) {
      alert("Please enter course name and description.");
      return;
    }

    if (editingId !== null) {
      setCourses((prev) =>
        prev.map((course) =>
          course.id === editingId ? { ...formData, id: editingId } : course,
        ),
      );
    } else {
      const newCourse = {
        ...formData,
        id: Date.now(),
      };

      setCourses((prev) => [...prev, newCourse]);
    }

    setFormData(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  // Open edit form
  const handleEdit = (course) => {
    setFormData({
      name: course.name,
      description: course.description,
      duration: course.duration,
      level: course.level,
      students: course.students,
    });

    setEditingId(course.id);
    setShowForm(true);
  };

  // Delete course
  const handleDelete = (id) => {
    if (window.confirm(t.confirmDelete)) {
      setCourses((prev) => prev.filter((course) => course.id !== id));
    }
  };

  // Search courses
  const filteredCourses = courses.filter((course) => {
    const search = searchTerm.toLowerCase();

    return (
      course.name.toLowerCase().includes(search) ||
      course.description.toLowerCase().includes(search)
    );
  });

  return (
    <div
      className={`manage-courses ${darkMode ? "dark-mode" : "light-mode"}`}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <div className="courses-header">
        <h2>{t.title}</h2>

        <button
          className="add-course-btn"
          onClick={() => {
            setFormData(emptyForm);
            setEditingId(null);
            setShowForm(true);
          }}
        >
          + {t.addCourse}
        </button>
      </div>

      <input
        type="text"
        className="course-search"
        placeholder={t.search}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {showForm && (
        <form className="course-form" onSubmit={handleSubmit}>
          <h3>{editingId !== null ? t.editCourse : t.addCourse}</h3>

          <input
            type="text"
            name="name"
            placeholder={t.courseName}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder={t.description}
            value={formData.description}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="duration"
            placeholder={t.duration}
            value={formData.duration}
            onChange={handleChange}
            required
          />

          <select name="level" value={formData.level} onChange={handleChange}>
            <option value="beginner">{t.beginner}</option>
            <option value="intermediate">{t.intermediate}</option>
            <option value="advanced">{t.advanced}</option>
          </select>

          <input
            type="number"
            name="students"
            min="0"
            placeholder={t.students}
            value={formData.students}
            onChange={handleChange}
          />

          <div className="course-form-actions">
            <button type="submit" className="save-course-btn">
              {t.save}
            </button>

            <button
              type="button"
              className="cancel-course-btn"
              onClick={() => {
                setShowForm(false);
                setEditingId(null);
                setFormData(emptyForm);
              }}
            >
              {t.cancel}
            </button>
          </div>
        </form>
      )}

      <div className="courses-table-wrapper">
        <table className="courses-table">
          <thead>
            <tr>
              <th>{t.courseName}</th>
              <th>{t.description}</th>
              <th>{t.duration}</th>
              <th>{t.level}</th>
              <th>{t.students}</th>
              <th>{t.actions}</th>
            </tr>
          </thead>

          <tbody>
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td>{course.description}</td>
                  <td>{course.duration}</td>
                  <td>{t[course.level]}</td>
                  <td>{course.students}</td>
                  <td>
                    <div className="course-action-buttons">
                      <button
                        className="edit-course-btn"
                        onClick={() => handleEdit(course)}
                      >
                        {t.edit}
                      </button>

                      <button
                        className="delete-course-btn"
                        onClick={() => handleDelete(course.id)}
                      >
                        {t.delete}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-courses">
                  {t.noCourses}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageCourses;
