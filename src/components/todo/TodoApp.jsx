import React, { useState, useEffect } from "react";
import "./todo.css"; // حتما فایل CSS رو ایمپورت کن

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { text: "دویدن", completed: false },
    { text: "خواندن کتاب", completed: false }
  ]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    const value = inputValue.trim();
    if (!value) {
      alert("You must write something!");
      return;
    }
    setTodos([...todos, { text: value, completed: false }]);
    setInputValue("");
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };


  return (
    <div className="todo-theme">
      <div className="container">
        <div className="todo_app">
          <h2>
            کار های روزانه
          </h2>

          <div className="row">
            <input
              type="text"
              id="input-box"
              placeholder="add your text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addTask();
              }}
            />
            <button onClick={addTask}>add</button>
          </div>

          <ul id="list-container">
            {todos.map((todo, index) => (
              <li
                key={index}
                className={todo.completed ? "checked" : ""}
                onClick={() => toggleComplete(index)}
              >
                {todo.text}
                <span onClick={(e) => { e.stopPropagation(); deleteTask(index); }}>
                  &times;
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
