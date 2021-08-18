import { useState } from "react";

export function AddEntry( {onAddEntry}) {
  const [mood, setMood] = useState("");
  const [diary, setDiary] = useState("");

  const onSubmit = (event) => {
    event.preventDefault()

    if(!diary && !mood) {
      alert("please add in today's mood and diary entry")
      return
    }

    onAddEntry({mood, diary})
    setMood("type in new mood to replace previous entry")
    setDiary("type in new diary entry to replace previous entry")
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Mood Tracker</label>
        <input
          type="text"
          placeholder="hi, how are you today"
          value={mood}
          onChange={(event) => setMood(event.target.value)}
        />
      </div>

      <div>
        <label>mini diary</label>
        <input
          type="text"
          placeholder="diary entry"
          value={diary}
          onChange={(event) => setDiary(event.target.value)}
        />
      </div>

      <input type="submit" value="Save Mood" />
    </form>
  );
}
