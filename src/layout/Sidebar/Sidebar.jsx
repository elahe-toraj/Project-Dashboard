import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { personsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import { SidebarContext } from '../../context/sidebarContext';
import "./Sidebar.css";

const Sidebar = () => {
  const { isSidebarOpen } = useContext(SidebarContext);
  const [sidebarClass, setSidebarClass] = useState("");

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
        <span className="info-name">کاربر</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <NavLink
                to={navigationLink.path}
                className={({ isActive }) =>
                  `nav-link ${navigationLink.id} ${isActive ? "active" : ""}`
                }
                end={navigationLink.path === '/'}
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
