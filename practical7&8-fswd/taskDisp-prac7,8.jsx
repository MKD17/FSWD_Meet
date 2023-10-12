import React, { useState } from 'react';

const TaskList = () => {
  // Hard-coded variables
  const showTasks = true; // Set this to true or false to control task rendering
  const tasksArray = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
  ];

  // State to control task rendering
  const [showTasksState, setShowTasksState] = useState(showTasks);

  return (
    <div>
      <h1>Task List</h1>
      <label>
        <input
          type="checkbox"
          checked={showTasksState}
          onChange={() => setShowTasksState(!showTasksState)}
        />
        Show Tasks
      </label>
      {showTasksState && (
        <ul>
          {tasksArray.map(task => (
            <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
