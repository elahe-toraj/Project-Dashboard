import React from "react";

const AdminDashboardReadme = () => {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "20px auto",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: 1.6,
      color: "#333",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "1rem",
      color: "#222",
      borderBottom: "2px solid #4CAF50",
      paddingBottom: "0.3rem",
    },
    sectionTitle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      marginTop: "1.5rem",
      marginBottom: "1rem",
      color: "#4CAF50",
      borderBottom: "1px solid #ddd",
      paddingBottom: "0.3rem",
    },
    list: {
      paddingLeft: "1.5rem",
      marginBottom: "1rem",
    },
    listItem: {
      marginBottom: "0.5rem",
    },
    paragraph: {
      marginBottom: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Admin Dashboard</h1>

      <p style={styles.paragraph}>
        This project is built with passion and dedication to programming.  
        Currently, only the Home page is completed, and the rest of the pages and features will be developed gradually in the future.
      </p>

      <h2 style={styles.sectionTitle}>Technologies</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>React</li>
        <li style={styles.listItem}>Vite</li>
      </ul>

      <h2 style={styles.sectionTitle}>Current Status</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>Home page is fully completed.</li>
        <li style={styles.listItem}>Maintenance section is under development.</li>
      </ul>

      <h2 style={styles.sectionTitle}>Future Plans and Features</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          Adding user bank account management with balance tracking for better financial oversight
        </li>
        <li style={styles.listItem}>
          Developing a work interaction and monthly reporting section to support business growth
        </li>
        <li style={styles.listItem}>
          Providing work reports to track tasks and achieve goals
        </li>
        <li style={styles.listItem}>
          Task categorization and prioritization for better organization
        </li>
        <li style={styles.listItem}>
          Creating an expense management section
        </li>
        <li style={styles.listItem}>
          Managing social media investments, including budgeting for advertising and analyzing returns for each platform
        </li>
        <li style={styles.listItem}>
          Collaborative projects with the ability to link and work with other users
        </li>
      </ul>

      <h2 style={styles.sectionTitle}>Project Goal</h2>
      <p style={styles.paragraph}>
        This dashboard is designed as a practical tool to assist in managing work and social activities more effectively.
      </p>
    </div>
  );
};

export default AdminDashboardReadme;
