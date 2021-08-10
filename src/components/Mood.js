import { useState } from "react";

export function Mood() {
  const [mood, setMood] = useState("");
  const [text, setText] = useState("");

  return (
    <form>
      <div>
        <label>Mood Tracker</label>
        <input
          type="text"
          placeholder="hi, how are you today"
          value={mood}
          onChange={(event) => setMood(event.target.vaue)}
        />
      </div>

      <div>
        <label>mini diary</label>
        <input
          type="text"
          placeholder="diary entry"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>

      <input type="submit" value="Save Mood" />
    </form>
  );
}
