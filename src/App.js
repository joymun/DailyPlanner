import { useState } from "react";
import "./styles.css";
import { Header } from "./components/Header.js";
import { Button } from "./components/Button";
import { Entry } from "./components/Entry";
import { AddTask } from "./components/AddTask";
import { Task } from "./components/Task";
import {AddEntry} from "./components/AddEntry";
import {Day} from "./components/Day";
import { AllEntries } from "./components/AllEntries";
import { AllTasks } from "./components/AllTasks";
import Calendar from 'react-calendar'

export default function App() {
  const currDate = new Date().toLocaleDateString();
  const [tasks, setTasks] = useState([]);
  const [entries, setEntries] = useState([]);
  const [days, setDays] = useState([])
  const today = days.filter((day) => day.id === currDate)
  const onClick = () => {
    console.log("click");
  };

  const addTask = (task) => {
    const { v4: uuidv4 } = require('uuid');
    const id = uuidv4()
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    updateDay()
  }

  const addEntry = (entry) => {
    const { v4: uuidv4 } = require('uuid');
    const id = uuidv4()
    const newEntry = {id, ...entry}
    setEntries([newEntry])
    updateDay()
  }
  function updateDay() {
    for (var i = 0; i < days.length; i++) {
      var day = days[i];

      if (days.indexOf(day.id) === currDate) {
          days.splice(i, 1);
      }
  }
    const id = currDate
    const newDay = ([id,tasks,entries])
    setDays([...days, newDay])
    console.log(days)

  }



  const deleteTask = (id) => {
    console.log("delete, id");
  };
  return (
    <div className="container">
      <Header title="Daily Planner" />
      <Calendar />
      {currDate}
      <AddTask onAdd={addTask} update={updateDay} />
      <AddEntry onAddEntry={addEntry} update = {updateDay} />
      <Day tasks={tasks} entries={entries} onDelete={deleteTask}/>
    </div>
  );
}
