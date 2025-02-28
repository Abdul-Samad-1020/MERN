import React, { useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState(""); // Holds the input value
  const [tasks, setTasks] = useState([]); // Holds the list of tasks

  const AddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), name: task, completed: false }]);
      setTask(""); // Clear input after adding
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>To Do App</h1>
      <form onSubmit={AddTask}>
        <label>
          Add task:
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((t) => (
          <li key={t.id} style={{ color: t.completed ? "red" : "green" , border:'2px'}}>
            {t.name}
            <button onClick={() => toggleTask(t.id)}>
              {t.completed ? "Undo" : "Completed"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
