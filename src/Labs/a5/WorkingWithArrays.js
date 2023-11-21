import axios from 'axios';
import { useEffect, useState } from 'react';

function TaskManager() {
    const API_ENDPOINT = 'https://kanbas-node-server-app-zi6l.onrender.com/a5/todos';
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState({
        id: 1,
        title: 'NodeJS Assignment',
        description: 'Create a NodeJS server with ExpressJS',
        due: '2021-09-09',
        completed: false,
    });
    const [errorMessage, setErrorMessage] = useState(null);

    const fetchTasks = async () => {
        try {
            const response = await axios.get(API_ENDPOINT);
            setTasks(response.data);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const addTask = async () => {
        try {
            const response = await axios.post(API_ENDPOINT, currentTask);
            setTasks([...tasks, response.data]);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    // Update an existing task
    const updateTask = async () => {
        try {
            const response = await axios.put(`${API_ENDPOINT}/${currentTask.id}`, currentTask);
            setTasks(tasks.map(task => task.id === currentTask.id ? currentTask : task));
            setCurrentTask({});
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`${API_ENDPOINT}/${id}`);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <h3>Task Manager</h3>
            <div>
                <input value={currentTask.title} onChange={(e) => setCurrentTask({...currentTask, title: e.target.value})} />
                <textarea value={currentTask.description} onChange={(e) => setCurrentTask({...currentTask, description: e.target.value})} />
                <input type="date" value={currentTask.due} onChange={(e) => setCurrentTask({...currentTask, due: e.target.value})} />
                <label>
                    <input type="checkbox" checked={currentTask.completed} onChange={(e) => setCurrentTask({...currentTask, completed: e.target.checked})} />
                    Completed
                </label>
                <button onClick={addTask}>Add Task</button>
                <button onClick={updateTask}>Update Task</button>
            </div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title}
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        </div>
    );
}

export default TaskManager;