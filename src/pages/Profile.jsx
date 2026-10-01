
import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {

  // Profile information
  const [name, setName] = useState("Yasin adil");
  const [email, setEmail] = useState("adilyaseen020@gmail.com");
  const [phone, setPhone] = useState("0786517586");

  // Temporary values for editing
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const [editPhone, setEditPhone] = useState(phone);

  // Control Edit Mode
  const [isEditing, setIsEditing] = useState(false);

  // Save changes
  const handleSave = () => {
    setName(editName);
    setEmail(editEmail);
    setPhone(editPhone);

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
          {name.charAt(0).toUpperCase()}
        </div>

        <h1>{name}</h1>

        <p className="profile-role">
          Student
        </p>

        {!isEditing ? (

          <>
            {/* Profile Information */}
            <div className="profile-info">

              <div className="info-item">
                <strong>Email</strong>
                <span>{email}</span>
              </div>

              <div className="info-item">
                <strong>Phone</strong>
                <span>{phone}</span>
              </div>

              <div className="info-item">
                <strong>Courses</strong>
                <span>3 Enrolled Courses</span>
              </div>

            </div>

            {/* Edit Button */}
            <button
              className="edit-profile-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          </>

        ) : (

          /* Edit Profile Form */
          <div className="profile-form">

            <label>Name</label>

            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />

            <label>Email</label>

            <input
              type="email"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
            />

            <label>Phone</label>

            <input
              type="text"
              value={editPhone}
              onChange={(e) => setEditPhone(e.target.value)}
            />

            {/* Buttons */}
            <div className="profile-buttons">

              <button
                className="save-profile-btn"
                onClick={handleSave}
              >
                Save Changes
              </button>

              <button
                className="cancel-profile-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default Profile;