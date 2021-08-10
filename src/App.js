import { useState } from "react";
import "./styles.css";
import { Header } from "./components/Header.js";
import { Button } from "./components/Button";
import { Mood } from "./components/Mood";
import { AddTask } from "./components/AddTask";
import { AllTasks } from "./components/AllTasks";

export default function App() {
  const currDate = new Date().toLocaleDateString();
  const [task, setTask] = useState([]);
  const [mood, setMood] = useState([]);

  const onClick = () => {
    console.log("click");
  };

  const deleteTask = (id) => {
    console.log("delete, id");
  };
  return (
    <div className="container">
      <Header title="Daily Planner" />
      {currDate}
      <AllTasks task={task} onDelete={deleteTask} />
      <AddTask />
      <Mood />
    </div>
  );
}
