import { useState , useEffect} from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
function App() {
  const [theme, setTheme] = useState("light");
  const [tasks, setTasks] = useState(()=>{
    
    const savedTasks = localStorage.getItem("tasks");
    
    if(savedTasks){
      return JSON.parse(savedTasks);
    }
    return [];
  });

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } , [tasks]);

  function addTask(task) {
   const newTask = {
    id: Date.now(),
    text: task,
    completed: false
  };

  setTasks([...tasks, newTask]);
  }


 function deleteTask(id) {
  const updatedTasks = tasks.filter((task) => task.id !== id);
  setTasks(updatedTasks);
  }

  function toggleTask(id) {
  const updatedTasks = tasks.map((task) =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  );

  setTasks(updatedTasks);
  }
  //dark & light mode
  useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
  setTheme((prevTheme) =>
    prevTheme === "light" ? "dark" : "light"
  );
}
   return (
    <div >
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks}  deleteTask={deleteTask} toggleTask={toggleTask}/>
    </div>
  );

}

export default App
