import { useState } from "react";
function AddTask({ addTask }) {
    const [newTask, setNewTask] = useState("");
    function handleAddTask() {
        if(newTask.trim() === ""){
            alert("Please enter a task!");
            return;
        }

        addTask(newTask);
        setNewTask("");
    }
    return (
        <div className="max-w-md mx-auto mt-30 flex gap-4">
            <input type="text" className="input input-primary   h-10 w-80 " placeholder="Add a new task..." value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button className="btn  w-30 h-10 btn-primary" onClick={handleAddTask}>Add Task</button>
        </div>
    )
}

export default AddTask