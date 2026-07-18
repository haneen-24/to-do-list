import TaskItem from './TaskItem';
function TaskList({ tasks, deleteTask, toggleTask }) {
    return (
    <div className='max-w-md mx-auto mt-20 '>
        <ul className="list bg-base-100 rounded-box shadow-md">
            {tasks.map((task) => (
                <TaskItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
            />))}
        </ul>
    </div>
    )
}
export default TaskList
