import { useState } from "react";

export function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  return (
    <form>
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
