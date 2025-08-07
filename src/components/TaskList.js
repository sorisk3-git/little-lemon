import React from "react";

export function TaskList({ tasks }) {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(({ id, task, done }) => (
          <li key={id}>
            <span style={{ textDecoration: done ? "line-through" : "none" }}>
              {task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}