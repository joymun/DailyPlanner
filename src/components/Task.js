export function Task({ task, onDelete }) {
  return (
    <div>
      <h3 onDoubleClick={() => onDelete(task.id)}>{task.text}</h3>
    </div>
  );
}
