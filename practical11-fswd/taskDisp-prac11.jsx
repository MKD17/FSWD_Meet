import React, { useEffect, useState } from "react";

const DispTask = () => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/todo");
        const taskData = await response.json();
        setTasks(taskData); // Set the retrieved tasks in state
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.task_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DispTask;
