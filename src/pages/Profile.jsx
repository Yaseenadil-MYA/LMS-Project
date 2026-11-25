import React, { useState, useContext, useRef } from "react";
import "./Profile.css";
import { LanguageContext } from "../context/LanguageContext";

const Profile = () => {
  const { t } = useContext(LanguageContext);
  // Profile Picture
  const fileInputRef = useRef(null);

  const [profileImage, setProfileImage] = useState(() => {
    return localStorage.getItem("profileImage") || "";
  });

  // Load saved profile information
  const [savedProfile] = useState(() => {
    try {
      const storedProfile = localStorage.getItem("studentProfile");

      return storedProfile ? JSON.parse(storedProfile) : {};
    } catch (error) {
      return {};
    }
  });

  // Profile information
  const [name, setName] = useState(savedProfile.name || "Yasin adil");
  const [email, setEmail] = useState(
    savedProfile.email || "adilyaseen020@gmail.com",
  );
  const [phone, setPhone] = useState(savedProfile.phone || "0786517586");

  // Temporary values for editing
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const [editPhone, setEditPhone] = useState(phone);

  // Control Edit Mode
  const [isEditing, setIsEditing] = useState(false);

  // Handle Profile Picture Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Check image type
    if (!file.type.startsWith("image/")) {
      alert(t.profile.invalidImage);
      return;
    }

    // Check image size (maximum 1MB)
    if (file.size > 1024 * 1024) {
      alert(t.profile.imageTooLarge);
      return;
    }

    // Convert image to Base64
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
      localStorage.setItem("profileImage", reader.result);
      // Notify Dashboard that profile picture has changed
      window.dispatchEvent(new Event("profileUpdated"));
    };

    reader.readAsDataURL(file);
  };

  // Save changes with validation
  const handleSave = () => {
    console.log("Save button clicked");
    if (!editName.trim() || !editEmail.trim() || !editPhone.trim()) {
      alert(t.profile.requiredFields);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editEmail)) {
      alert(t.profile.invalidEmail);
      return;
    }
    // Validate phone number
    const phoneRegex = /^\+?[0-9\s-]{7,20}$/;
    const phoneDigits = editPhone.replace(/[\s-]/g, "");

    if (
      !phoneRegex.test(editPhone) ||
      phoneDigits.length < 7 ||
      phoneDigits.length > 15
    ) {
      alert(t.profile.invalidPhone);
      return;
    }

    setName(editName.trim());
    setEmail(editEmail.trim());
    // Save profile information in localStorage
    localStorage.setItem(
      "studentProfile",
      JSON.stringify({
        name: editName.trim(),
        email: editEmail.trim(),
        phone: editPhone.trim(),
      }),
    );
    // Notify Dashboard that profile information has changed
    window.dispatchEvent(new Event("profileUpdated"));

    setPhone(editPhone.trim());

    setIsEditing(false);
  };

  // Cancel editing
  const handleCancel = () => {
    setEditName(name);
    setEditEmail(email);
    setEditPhone(phone);

    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        {/* Profile Avatar */}
        <div className="profile-avatar">
          {profileImage ? (
            <img src={profileImage} alt="Profile" />
          ) : (
            name.charAt(0).toUpperCase()
          )}
        </div>
        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />

        {/* Upload Picture Button */}
        <button
          className="upload-picture-btn"
          onClick={() => fileInputRef.current.click()}
        >
          📷 {t.profile.uploadPicture}
        </button>

        <h1>{name}</h1>

        <p className="profile-role">{t.profile.student}</p>

        {!isEditing ? (
          <>
            {/* Profile Information */}
            <div className="profile-info">
              <div className="info-item">
                <strong>{t.profile.email}</strong>
                <span>{email}</span>
              </div>

              <div className="info-item">
                <strong>{t.profile.phone}</strong>
                <span>{phone}</span>
              </div>

              <div className="info-item">
                <strong>{t.profile.courses}</strong>
                <span>{t.profile.enrolledCourses}</span>
              </div>
            </div>

            {/* Edit Button */}
            <button
              className="edit-profile-btn"
              onClick={() => setIsEditing(true)}
            >
              {t.profile.editProfile}
            </button>
          </>
        ) : (
          /* Edit Profile Form */
          <div className="profile-form">
            <label>{t.profile.name}</label>

            <input
              type="text"
              value={editName}
              placeholder={t.profile.namePlaceholder}
              onChange={(e) => setEditName(e.target.value)}
            />

            <label>{t.profile.email}</label>

            <input
              type="email"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
              placeholder={t.profile.emailPlaceholder}
              required
            />

            <label>{t.profile.phone}</label>

            <input
              type="text"
              value={editPhone}
              placeholder={t.profile.phonePlaceholder}
              onChange={(e) => setEditPhone(e.target.value)}
            />

            {/* Buttons */}
            <div className="profile-buttons">
              <button className="save-profile-btn" onClick={handleSave}>
                {t.profile.saveChanges}
              </button>

              <button className="cancel-profile-btn" onClick={handleCancel}>
                {t.profile.cancel}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
