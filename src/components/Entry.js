export function Entry({ entry, onDelete }) {
    return (
      <div onDoubleClick={() => onDelete(entry.id)}>
        <h3>{entry.mood}</h3>
        <h4>{entry.diary}</h4>
      </div>
    );
  }