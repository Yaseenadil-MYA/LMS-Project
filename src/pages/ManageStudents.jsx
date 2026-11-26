
import React, { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import "./ManageStudents.css";

const ManageStudents = () => {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);

  const translations = {
    en: {
      title: "Manage Students",
      addStudent: "Add Student",
      search: "Search students...",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      status: "Status",
      actions: "Actions",
      active: "Active",
      inactive: "Inactive",
      edit: "Edit",
      delete: "Delete",
      save: "Save",
      cancel: "Cancel",
      namePlaceholder: "Enter student name",
      emailPlaceholder: "Enter email",
      phonePlaceholder: "Enter phone number",
      noStudents: "No students found.",
      confirmDelete: "Are you sure you want to delete this student?"
    },

    ps: {
      title: "د زده کوونکو مدیریت",
      addStudent: "زده کوونکی اضافه کړئ",
      search: "زده کوونکي ولټوئ...",
      name: "بشپړ نوم",
      email: "ایمیل",
      phone: "ټیلیفون",
      status: "حالت",
      actions: "عملیات",
      active: "فعال",
      inactive: "غیرفعال",
      edit: "سمون",
      delete: "حذف",
      save: "ذخیره",
      cancel: "لغوه",
      namePlaceholder: "د زده کوونکي نوم ولیکئ",
      emailPlaceholder: "ایمیل ولیکئ",
      phonePlaceholder: "د ټیلیفون شمېره ولیکئ",
      noStudents: "زده کوونکی پیدا نه شو.",
      confirmDelete: "ایا ډاډه یاست چې دا زده کوونکی حذف کړئ؟"
    },

    fa: {
      title: "مدیریت دانش‌آموزان",
      addStudent: "افزودن دانش‌آموز",
      search: "جستجوی دانش‌آموزان...",
      name: "نام کامل",
      email: "ایمیل",
      phone: "شماره تماس",
      status: "وضعیت",
      actions: "عملیات",
      active: "فعال",
      inactive: "غیرفعال",
      edit: "ویرایش",
      delete: "حذف",
      save: "ذخیره",
      cancel: "لغو",
      namePlaceholder: "نام دانش‌آموز را وارد کنید",
      emailPlaceholder: "ایمیل را وارد کنید",
      phonePlaceholder: "شماره تماس را وارد کنید",
      noStudents: "دانش‌آموزی پیدا نشد.",
      confirmDelete: "آیا مطمئن هستید که این دانش‌آموز حذف شود؟"
    }
  };

  const t = translations[language] || translations.en;

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Ahmad Khan",
      email: "ahmad@example.com",
      phone: "0700000001",
      status: "active"
    },
    {
      id: 2,
      name: "Ali Ahmad",
      email: "ali@example.com",
      phone: "0700000002",
      status: "active"
    },
    {
      id: 3,
      name: "Mohammad",
      email: "mohammad@example.com",
      phone: "0700000003",
      status: "inactive"
    }
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "active"
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Open add student form
  const handleAdd = () => {
    setEditId(null);

    setFormData({
      name: "",
      email: "",
      phone: "",
      status: "active"
    });

    setShowForm(true);
  };

  // Save or update student
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Name and Email are required!");
      return;
    }

    if (editId !== null) {
      setStudents(
        students.map((student) =>
          student.id === editId
            ? { ...student, ...formData }
            : student
        )
      );
    } else {
      const newStudent = {
        id: Date.now(),
        ...formData
      };

      setStudents([...students, newStudent]);
    }

    setShowForm(false);
    setEditId(null);
  };

  // Edit student
  const handleEdit = (student) => {
    setEditId(student.id);

    setFormData({
      name: student.name,
      email: student.email,
      phone: student.phone,
      status: student.status
    });

    setShowForm(true);
  };

  // Delete student
  const handleDelete = (id) => {
    if (!window.confirm(t.confirmDelete)) {
      return;
    }

    setStudents(
      students.filter((student) => student.id !== id)
    );
  };

  // Search students
  const filteredStudents = students.filter((student) => {
    const searchText = search.toLowerCase();

    return (
      student.name.toLowerCase().includes(searchText) ||
      student.email.toLowerCase().includes(searchText) ||
      student.phone.includes(searchText)
    );
  });

  return (
    <div
      className={`manage-students ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <div className="students-header">
        <h1>{t.title}</h1>

        <button
          className="add-student-btn"
          onClick={handleAdd}
        >
          + {t.addStudent}
        </button>
      </div>

      {/* Search */}
      <div className="students-search">
        <input
          type="text"
          placeholder={t.search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Add / Edit Form */}
      {showForm && (
        <form
          className="student-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder={t.namePlaceholder}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder={t.phonePlaceholder}
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

          <button type="submit">
            {t.save}
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={() => setShowForm(false)}
          >
            {t.cancel}
          </button>
        </form>
      )}

      {/* Students Table */}
      <div className="students-table-wrapper">
        <table className="students-table">
          <thead>
            <tr>
              <th>{t.name}</th>
              <th>{t.email}</th>
              <th>{t.phone}</th>
              <th>{t.status}</th>
              <th>{t.actions}</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>

                  <td>
                    <span
                      className={`student-badge ${student.status}`}
                    >
                      {student.status === "active"
                        ? t.active
                        : t.inactive}
                    </span>
                  </td>

                  <td className="student-actions">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(student)}
                    >
                      {t.edit}
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(student.id)}
                    >
                      {t.delete}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-students">
                  {t.noStudents}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStudents;
