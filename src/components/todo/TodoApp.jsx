import React, { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import "./todo.css";

export default function TodoApp() {
  const [tasks, setTasks] = useState({
    today: [
      { id: 1, text: "طراحی هدر سایت", done: false },
      { id: 2, text: "مرور جلسه دیروز", done: false },
    ],
    week: [
      { id: 3, text: "پیاده‌سازی فرم ثبت‌نام", done: false },
      { id: 4, text: "جلسه با تیم بک‌اند", done: false },
    ],
    month: [
      { id: 5, text: "تست نهایی پروژه", done: false },
      { id: 6, text: "نوشتن مستندات کامل پروژه", done: false },
    ],
  });

  const toggleTask = (section, id) => {
    setTasks({
      ...tasks,
      [section]: tasks[section].map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    });
  };

  const allTasks = [...tasks.today, ...tasks.week, ...tasks.month];
  const completedCount = allTasks.filter((t) => t.done).length;
  const progress = Math.round((completedCount / allTasks.length) * 100);

  return (
    <div className="container">
      <h1 className="title">برنامه کاری من</h1>

      <div className="grid">
        <div className="card">
          <h2>امروز</h2>
          {tasks.today.map((task) => (
            <div key={task.id} className="task">
              <div className="task-left">
                {task.done ? (
                  <CheckCircle2
                    className="icon done"
                    onClick={() => toggleTask("today", task.id)}
                  />
                ) : (
                  <Circle
                    className="icon"
                    onClick={() => toggleTask("today", task.id)}
                  />
                )}
                <span className={task.done ? "done-text" : ""}>{task.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="card">
          <h2>این هفته</h2>
          {tasks.week.map((task) => (
            <div key={task.id} className="task">
              <div className="task-left">
                {task.done ? (
                  <CheckCircle2
                    className="icon done"
                    onClick={() => toggleTask("week", task.id)}
                  />
                ) : (
                  <Circle
                    className="icon"
                    onClick={() => toggleTask("week", task.id)}
                  />
                )}
                <span className={task.done ? "done-text" : ""}>{task.text}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <h2>این ماه</h2>
          {tasks.month.map((task) => (
            <div key={task.id} className="task">
              <div className="task-left">
                {task.done ? (
                  <CheckCircle2
                    className="icon done"
                    onClick={() => toggleTask("month", task.id)}
                  />
                ) : (
                  <Circle
                    className="icon"
                    onClick={() => toggleTask("month", task.id)}
                  />
                )}
                <span className={task.done ? "done-text" : ""}>{task.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="todo-progress-card">
        <p>پیشرفت کلی: {progress}%</p>
        <div className="todo-progress-bar">
          <div
            className="todo-progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

    </div>
  );
}
