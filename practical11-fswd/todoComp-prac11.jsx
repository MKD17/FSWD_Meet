import React, { useState } from "react";

const Todo = () => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task_name: taskName }),
      });

      if (response.ok) {
        // Task added successfully, you can handle this as needed
        console.log("Task added successfully");
      } else {
        // Handle error if the task was not added
        console.error("Error adding task");
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }

    // Clear the input field after submission
    setTaskName("");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          style={{ width: "18rem", fontWeight: "600", height: "2rem", fontSize: "large" }}
        />
        <button
          type="submit"
          style={{
            marginLeft: "1rem",
            height: "3rem",
            width: "3rem",
            borderRadius: "2rem",
            fontWeight: "600",
            fontSize: "x-large",
            border: "none",
            background: "purple",
            color: "white",
          }}
        >
          +
        </button>
      </form>
    </div>
  );
};

export default Todo;
