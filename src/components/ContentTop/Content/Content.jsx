import React from "react";
import ContentTop from "../ContentTop";
import "./Content.css";

const Content = ({ title, children }) => {
  return (
    <div className="main-content">
      <ContentTop title={title} />
      <div className="content-body">
        {children}
      </div>
    </div>
  );
};

export default Content;
