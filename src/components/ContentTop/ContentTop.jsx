import React, { useContext, useState } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";

const ContentTop = ({ title }) => {
  const { toggleSidebar } = useContext(SidebarContext);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const notifications = [
    "پیام جدید از مدیریت",
    "گزارش جدید بارگذاری شد",
    "رمز عبور شما تغییر یافت"
  ];

  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button type="button" className="sidebar-toggler" onClick={toggleSidebar}>
          <img src={iconsImgs.menu} alt="Menu" />
        </button>
        <h3 className="content-top-title">{title}</h3>
      </div>

      <div className="content-top-btns">
        <button type="button" className="search-btn content-top-btn">
          <img src={iconsImgs.search} alt="Search" />
        </button>

        <div className="notification-wrapper">
          <button className="notification-btn content-top-btn" onClick={toggleNotifications}>
            <img src={iconsImgs.bell} alt="Notifications" />
            <span className="notification-btn-dot"></span>
          </button>

          {showNotifications && (
            <div className="notification-popup">
              {notifications.map((msg, index) => (
                <div key={index} className="notification-item">
                  {msg}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentTop;
