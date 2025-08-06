//import './App.css';

import React, { useState } from "react";
import { TaskList } from "./components/TaskList";

function App() {
  
  const [tasks, setTasks] = useState([
    { id: 1, task: "Go shopping", done: true },
    { id: 2, task: "Wash dishes", done: false },
  ]);

  return (
    <TaskList tasks={tasks} />
  )
}

export default App;
