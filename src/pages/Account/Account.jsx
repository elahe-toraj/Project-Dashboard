import React, { useState } from "react";
import { userData } from "../../data/data";
import ContentTop from "../../components/ContentTop/ContentTop";
import ResumeUpload from "../../components/ResumeUpload/ResumeUpload";
import "./Account.css";
const Account = () => {
  const [email, setEmail] = useState(userData.email);

  return (
    <div className="account-page">
      <ContentTop title="پروفایل کاربر" /> 

      <div className="account-container">
        <h2 className="account-title">پروفایل کاربر</h2>

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

        <ResumeUpload />

        <button className="change-password-btn">تغییر رمز عبور</button>
      </div>
    </div>
  );
};
export default Account;
