import {Task} from './Task'

export function AllTasks({ tasks, onDelete }) {
  if(!tasks) {
    return
  }
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} />
      ))}
    </>
  );
}
