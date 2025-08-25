import React, { useState } from "react";
import { userData } from "../../data/data";
import Content from "../../components/ContentTop/Content/Content";
import "./Account.css";

const Account = () => {
  const [email, setEmail] = useState(userData.email);
  const [resume, setResume] = useState(null);

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <Content title="پروفایل کاربر">
      <div className="account-container">
        <div className="account-grid">
          <div className="account-field">
            <label>نام</label>
            <input type="text" value={userData.firstName} disabled />
          </div>
          <div className="account-field">
            <label>نام خانوادگی</label>
            <input type="text" value={userData.lastName} disabled />
          </div>
          <div className="account-field">
            <label>شماره ملی</label>
            <input type="text" value={userData.nationalId} disabled />
          </div>
          <div className="account-field">
            <label>شماره تماس</label>
            <input type="text" value={userData.phone} disabled />
          </div>
        </div>

        <div className="account-field">
          <label>ایمیل</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="account-field">
          <label>رزومه</label>
          <input type="file" onChange={handleResumeUpload} />
          {resume && <p>فایل انتخاب‌شده: {resume.name}</p>}
        </div>

        <button className="change-password-btn">تغییر رمز عبور</button>
      </div>
    </Content>
  );
};

export default Account;
