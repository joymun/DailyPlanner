import { useState } from "react";
import "./styles.css";
import { Header } from "./components/Header.js";
import { Button } from "./components/Button";
import { Entry } from "./components/Entry";
import { AddTask } from "./components/AddTask";
import { Task } from "./components/Task";
import {AddEntry} from "./components/AddEntry";
import {Day} from "./components/Day";

export default function App() {
  const currDate = new Date().toLocaleDateString();
  const [tasks, setTasks] = useState([]);
  const [entries, setEntries] = useState([]);
  const [days, setDays] = useState([])

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
    const newEntry = {id, entry}
    setEntries([newEntry])
  }
  function addDay() {
    console.log("it is working")

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
      <Day tasks={tasks} entries={entries} onDelete={deleteTask}/>
    </div>
  );
}
