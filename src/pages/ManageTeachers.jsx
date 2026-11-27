
import React, { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import "./ManageTeachers.css";

function ManageTeachers() {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);

  // Translations
  const translations = {
    en: {
      title: "Manage Teachers",
      add: "Add Teacher",
      edit: "Edit Teacher",
      name: "Full Name",
      email: "Email",
      subject: "Subject",
      phone: "Phone",
      status: "Status",
      actions: "Actions",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      search: "Search teachers...",
      active: "Active",
      inactive: "Inactive",
      confirmDelete: "Are you sure you want to delete this teacher?",
      noTeachers: "No teachers found.",
    },
    ps: {
      title: "د ښوونکو مدیریت",
      add: "ښوونکی اضافه کړئ",
      edit: "ښوونکی اصلاح کړئ",
      name: "بشپړ نوم",
      email: "ایمیل",
      subject: "مضمون",
      phone: "د اړیکې شمېره",
      status: "حالت",
      actions: "فعالیتونه",
      save: "ثبت",
      cancel: "لغوه",
      delete: "حذف",
      search: "ښوونکي ولټوئ...",
      active: "فعال",
      inactive: "غیرفعال",
      confirmDelete: "آیا غواړئ دا ښوونکی حذف کړئ؟",
      noTeachers: "کوم ښوونکی ونه موندل شو.",
    },
    fa: {
      title: "مدیریت استادان",
      add: "افزودن استاد",
      edit: "ویرایش استاد",
      name: "نام کامل",
      email: "ایمیل",
      subject: "مضمون",
      phone: "شماره تماس",
      status: "وضعیت",
      actions: "عملیات",
      save: "ذخیره",
      cancel: "لغو",
      delete: "حذف",
      search: "جستجوی استادان...",
      active: "فعال",
      inactive: "غیرفعال",
      confirmDelete: "آیا مطمئن هستید که این استاد حذف شود؟",
      noTeachers: "استادی پیدا نشد.",
    },
  };

  const t = translations[language] || translations.en;

  // Sample teacher data
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Ahmad Khan",
      email: "ahmad@example.com",
      subject: "HTML & CSS",
      phone: "0700000001",
      status: "active",
    },
    {
      id: 2,
      name: "Ali Ahmad",
      email: "ali@example.com",
      subject: "JavaScript",
      phone: "0700000002",
      status: "active",
    },
    {
      id: 3,
      name: "Mohammad Khan",
      email: "mohammad@example.com",
      subject: "PHP",
      phone: "0700000003",
      status: "inactive",
    },
  ]);

  const emptyForm = {
    name: "",
    email: "",
    subject: "",
    phone: "",
    status: "active",
  };

  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add or update teacher
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim()
    ) {
      return;
    }

    if (editingId !== null) {
      setTeachers((prev) =>
        prev.map((teacher) =>
          teacher.id === editingId
            ? { ...formData, id: editingId }
            : teacher
        )
      );
    } else {
      const newTeacher = {
        ...formData,
        id: Date.now(),
      };

      setTeachers((prev) => [...prev, newTeacher]);
    }

    setFormData(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  // Edit teacher
  const handleEdit = (teacher) => {
    setFormData({
      name: teacher.name,
      email: teacher.email,
      subject: teacher.subject,
      phone: teacher.phone,
      status: teacher.status,
    });

    setEditingId(teacher.id);
    setShowForm(true);
  };

  // Delete teacher
  const handleDelete = (id) => {
    if (window.confirm(t.confirmDelete)) {
      setTeachers((prev) =>
        prev.filter((teacher) => teacher.id !== id)
      );
    }
  };

  // Search teachers
  const filteredTeachers = teachers.filter((teacher) => {
    const search = searchTerm.toLowerCase();

    return (
      teacher.name.toLowerCase().includes(search) ||
      teacher.email.toLowerCase().includes(search) ||
      teacher.subject.toLowerCase().includes(search)
    );
  });

  return (
    <div
      className={`manage-teachers ${darkMode ? "dark-mode" : "light-mode"}`}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <div className="teachers-header">
        <h2>{t.title}</h2>

        <button
          className="add-teacher-btn"
          onClick={() => {
            setFormData(emptyForm);
            setEditingId(null);
            setShowForm(true);
          }}
        >
          + {t.add}
        </button>
      </div>

      <input
        type="text"
        className="teacher-search"
        placeholder={t.search}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {showForm && (
        <form className="teacher-form" onSubmit={handleSubmit}>
          <h3>{editingId !== null ? t.edit : t.add}</h3>

          <input
            type="text"
            name="name"
            placeholder={t.name}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t.email}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder={t.subject}
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder={t.phone}
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="active">{t.active}</option>
            <option value="inactive">{t.inactive}</option>
          </select>

          <div className="teacher-form-actions">
            <button type="submit" className="save-teacher-btn">
              {t.save}
            </button>

            <button
              type="button"
              className="cancel-teacher-btn"
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

      <div className="teachers-table-wrapper">
        <table className="teachers-table">
          <thead>
            <tr>
              <th>{t.name}</th>
              <th>{t.email}</th>
              <th>{t.subject}</th>
              <th>{t.phone}</th>
              <th>{t.status}</th>
              <th>{t.actions}</th>
            </tr>
          </thead>

          <tbody>
            {filteredTeachers.length > 0 ? (
              filteredTeachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.name}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.subject}</td>
                  <td>{teacher.phone || "-"}</td>
                  <td>
                    <span className={`teacher-status ${teacher.status}`}>
                      {teacher.status === "active"
                        ? t.active
                        : t.inactive}
                    </span>
                  </td>
                  <td>
                    <div className="teacher-action-buttons">
                      <button
                        className="edit-teacher-btn"
                        onClick={() => handleEdit(teacher)}
                      >
                        {t.edit}
                      </button>

                      <button
                        className="delete-teacher-btn"
                        onClick={() => handleDelete(teacher.id)}
                      >
                        {t.delete}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-teachers">
                  {t.noTeachers}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageTeachers;
