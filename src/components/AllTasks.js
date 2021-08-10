export function AllTasks({ task, onDelete }) {
  return (
    <>
      {task.map((task) => (
        <task key={task.id} tasks={task} onDelete={onDelete} />
      ))}
    </>
  );
}
