import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        })
        setTitle('')
        setDescription('')
    }

  return (
    <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
            <h1 className="text-2xl font-bold capitalize text-center text-white mb-5">Crear Tarea</h1>
            <input placeholder="Write your task" 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="bg-slate-300 p-3 w-full mb-2 rounded-md"
                autoFocus
            />
            <textarea placeholder="Task Description"
                className="bg-slate-300 mb-2 rounded-md p-3 w-full"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            ></textarea>
            <button 
                className="bg-indigo-500 shadow-lg shadow-indigo-500/50 px-3 py-1 text-white rounded-md transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300"
                type="submit"
            >Save</button>
        </form>
    </div>
  )
}

export default TaskForm;