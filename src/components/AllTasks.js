import {Task} from './Task'

export function AllTasks({ tasks, onDelete }) {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} />
      ))}
    </>
  );
}
