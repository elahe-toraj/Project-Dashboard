import React, { useState } from "react";
import "./ResumeUpload.css";
import defaultResume from "../../assets/images/Resume.png";

const ResumeUpload = () => {
  const [resume, setResume] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setResume(file);
    setProgress(0);
    setUploading(true);
    setUploaded(false);

    
    const interval = setInterval(() => {
      setProgress(prev => {
        if(prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          setUploaded(true);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  return (
    <div className="resume-upload-container">
      <label className="resume-upload-label">
        انتخاب فایل
        <input type="file" onChange={handleResumeUpload} />
      </label>

      <div className="resume-preview">
        {uploading ? (
          <img src={loadingGif} alt="Loading..." />
        ) : (
          <img src={resume ? URL.createObjectURL(resume) : defaultResume} alt="Resume Preview" />
        )}
      </div>

      {resume && (
        <div className="progress-wrapper">
          <div className="progress-bar">
            <div className="progress-fill" style={{width: `${progress}%`}}></div>
          </div>
          <span>{progress}%</span>
        </div>
      )}

      {uploaded && <p className="upload-success">رزومه با موفقیت آپلود شد!</p>}
    </div>
  );
};

export default ResumeUpload;
