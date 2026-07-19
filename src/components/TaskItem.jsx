function TaskItem({ task, deleteTask, toggleTask }) {
    return (
        <li className="list-row">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="checkbox checkbox-warning"
            />
            <span className={
                task.completed ?"line-through text-gray-400 "
                : "" }>
                {task.text}
            </span>
            <button  className="btn  w-25 h-7 btn-error"  onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    )
}
export default TaskItem