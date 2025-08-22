import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [openMenu, setOpenMenu] = useState(null); // kis task ka menu open hai

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setOpenMenu(null);
  };

  return (
    <div className="bg-[#242424] min-h-screen flex flex-col items-center justify-center text-white">
      <div className="w-80 bg-[#919191] py-8 px-4 rounded-md">
        <Header/>
        {/* Input + Add Button */}
        <div className="flex gap-2 mb-4">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter task"
            className="flex-1 px-3 py-2 rounded-lg text-white border border-gray-400"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center bg-[#333] px-3 py-2 rounded-lg relative"
            >
              {/* Left side - Checkbox + Text */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-4 h-4"
                />
                <p className={task.completed ? "line-through opacity-60" : ""}>
                  {task.text}
                </p>
              </div>

              {/* Right side - 3 dots */}
              <div className="relative">
                <button
                  onClick={() =>
                    setOpenMenu(openMenu === task.id ? null : task.id)
                  }
                  className="text-xl px-2 cursor-pointer"
                >
                  ⋮
                </button>

                {/* Dropdown Menu */}
                {openMenu === task.id && (
                  <div className="absolute right-0 mt-2 w-24 bg-[#444] rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="block w-full text-left px-3 py-2 hover:bg-red-500 hover:text-white rounded-lg cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
