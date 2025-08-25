import React, { useState } from "react";
import { userData } from "../../data/data";
import "./Account.css";

export default function Account() {
  const [email, setEmail] = useState(userData.email);
  const [resume, setResume] = useState(null);

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  const handleChangePassword = () => {
    alert("لینک تغییر رمز عبور برای شما فعال شد!");
  };

  return (
    <div className="account-container">
      <h1 className="account-title">پروفایل کاربر</h1>

      {/* اطلاعات کاربری */}
      <div className="info-grid">
        <div className="info-item">
          <label>نام:</label>
          <span>{userData.firstName}</span>
        </div>
        <div className="info-item">
          <label>نام خانوادگی:</label>
          <span>{userData.lastName}</span>
        </div>
        <div className="info-item">
          <label>شماره ملی:</label>
          <span>{userData.nationalId}</span>
        </div>
        <div className="info-item">
          <label>شماره تماس:</label>
          <span>{userData.phone}</span>
        </div>
      </div>

      {/* تغییر ایمیل */}
      <div className="email-section">
        <label>ایمیل:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn">ذخیره ایمیل</button>
      </div>

      {/* آپلود رزومه */}
      <div className="resume-section">
        <label>رزومه:</label>
        <input type="file" onChange={handleResumeUpload} />
        {resume && <p>رزومه انتخاب‌شده: {resume.name}</p>}
      </div>

      {/* تغییر رمز */}
      <div className="password-section">
        <button className="btn danger" onClick={handleChangePassword}>
          تغییر رمز عبور
        </button>
      </div>
    </div>
  );
}
