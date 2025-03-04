import React, { useState } from "react";

const CrudApp = () => {
  const [task, setTask] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleTask = () => {
    if (taskInput.trim() !== "") {
      if (isEditing) {
        // If editing, update the task
        const updatedTasks = task.map((t, index) =>
          index === editIndex ? taskInput : t
        );
        setTask(updatedTasks);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        // If adding a new task
        setTask([...task, taskInput]);
      }
      setTaskInput("");
      alert(isEditing ? "Task updated successfully" : "Task added successfully");
    }
  };

  // ✅ Delete Task
  const handleDeleteTask = (index) => {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  };

  // ✅ Edit Task
  const handleUpdateTask = (index) => {
    setTaskInput(task[index]); // Set input value to selected task
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <input
        type="text"
        placeholder="Enter Your Task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={handleTask}>{isEditing ? "Update Task" : "Add Task"}</button>

      <ul>
        {task.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
            <button onClick={() => handleUpdateTask(index)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
