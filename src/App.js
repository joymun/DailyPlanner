import { useState } from "react";
import "./styles.css";
import { Header } from "./components/Header.js";
import { Button } from "./components/Button";
import { Entry } from "./components/Entry";
import { AddTask } from "./components/AddTask";
import { AllTasks } from "./components/AllTasks";
import { Task } from "./components/Task";
import {AddEntry} from "./components/AddEntry";
import {AllEntries} from "./components/AllEntries";

export default function App() {
  const currDate = new Date().toLocaleDateString();
  const [tasks, setTasks] = useState([
    {
      id:1,
      text:"wow"
    }
  ]);
  const [entries, setEntries] = useState([
    {
      id:5,
      mood:"happy",
      diary:"entry"
    }

  ]);

  const onClick = () => {
    console.log("click");
  };

  const addTask = (task) => {
    const { v4: uuidv4 } = require('uuid');
    const id = uuidv4()
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const addEntry = (entry) => {
    const { v4: uuidv4 } = require('uuid');
    const id = uuidv4()
    const newEntry = {id, ...entry}
    setEntries([...entries, newEntry])
  }

  const deleteTask = (id) => {
    console.log("delete, id");
  };
  return (
    <div className="container">
      <Header title="Daily Planner" />
      {currDate}
      <AddTask onAdd={addTask}/>
      <AddEntry onAddEntry={addEntry} />
      <AllTasks tasks={tasks} onDelete={deleteTask} />
      <AllEntries entries={entries} onDelete={deleteTask} />
    </div>
  );
}
