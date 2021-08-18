import { useState } from "react";

export function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const onSubmit = (event) => {
    event.preventDefault()

    if(!text) {
      alert("please add in today's task")
      return
    }

    onAdd({text})
    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Task</label>
        <input
          type="text"
          placehold="tasks for today"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>

      <input type="submit" value="add task" />
    </form>
  );
}
