import {AllTasks} from "./AllTasks";
import {AllEntries} from "./AllEntries";


export function Day({tasks, entries, deleteTask}) {
    const currDate = new Date().toLocaleDateString();

    return(
        <div>
            <AllTasks tasks={tasks} onDelete={deleteTask} />
            <AllEntries entries={entries} onDelete={deleteTask} />
        </div>
    )
}
