function TaskItem({ task, deleteTask, toggleTask }) {
    return (
        <li className="list-row">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="checkbox checkbox-warning"
            />
            <span className={task.completed ? "completed" : ""}>
                {task.text}
            </span>
            <button  class="btn  w-25 h-7 btn-error"  onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    )
}
export default TaskItem