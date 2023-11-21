import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useFetcher } from "react-router-dom";


function WorkingWithArrays(){

    const API = "https://kanbas-node-server-app-2bqh.onrender.com/a5/todos";
    const [errorMessage, setErrorMessage] = useState(null);

    const [todo, setTodo] = useState({ 
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
    });


    const [todos, setTodos] = useState([]);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    }
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    }

    const removeTodo = async (todo) => {
        const response = await axios.delete(`${API}/${todo.id}`);
        setTodos(response.data);
    }

    const deleteTodo = async (todo) => {
        try{
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error) {
            console.log(error)
            setErrorMessage(error.response.data.message);
        }
    }
    const updateTodo = async () => {
        try{
            const response = await axios.put(`${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => t.id === todo.id ? todo : t));
        } catch (error) {
            console.log(error)
            setErrorMessage(error.response.data.message);
        }
    }

    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodo(response.data);
    }
    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    }
    const updateTitle = async () => {
        const response = await axios.put(`${API}/title/${todo.title}`);
        setTodo(response.data);
    }
    
    useEffect( () => {
        fetchTodos();}, [])


        return(
        <div>
            <h2>Test</h2>

            <h3>Working With Arrays</h3>
            <input value={todo.it} readOnly/> 
            <input value={todo.title} onChange={(e) => setTodo({...todo, title: e.target.value})} type="text"/>
            <textarea onChange={(e)=> setTodo({...todo, description: e.target.value})} value={todo.description} type="text" />
            <input onChange={(e) => setTodo({...todo, due: e.target.value })} value={todo.due} type="date" />
            <label> <input onChange={(e)=> setTodo({...todo, completed: e.target.checked})} value={todo.completed} type="checkbox" /> Completed </label>
            <button onClick={postTodo} className="btn "> Post Todo</button>
            <button className="btn"  onClick={updateTodo}>Update Todo</button>
            <button className="btn  mb-2" onClick={createTodo}>Create Todo</button>
            <button onClick={updateTitle} className="btn  mb-2 w-100"> Update Title</button>
            <ul className="list-group">
                {todos.map((todo)=> <li key={todo.id} className="list-group-item">
                <button onClick={() => fetchTodoById(todo.id)} className="btn  me-2 float-end">Edit</button>
                <button onClick={() => deleteTodo(todo)} className="btn  float-end"> Delete</button>
                <input checked={todo.completed} type="checkbox" readOnly/>
                {todo.title}
                <p>{todo.description}</p>
                <p>{todo.due}</p>
                </li>)}
            </ul>

            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">  {errorMessage} </div>
            )}
            <h4>Retrieving Arrays</h4>
            <a href={API} className="btn  me-2">Get Todos</a>
            <h4>Retrieving an Item from an Array by ID</h4>
            <input className="form-control" value={todo.id} onChange={(e) => setTodo({...todo, id: e.target.value})}/>
            <a href={`${API}/${todo.id}`} className="btn me-2">Get Todo by ID</a>
            <h3>Filtering Array Items</h3>
            <a href={`${API}/${todo.id}?completed=true`} className="btn  me-2">Get Completed Todos</a>
            <h4>Creating new Items in an Array</h4>
            <a href={`${API}/create`} className="btn me-2">Create Todo</a>
            <input value={todo.id} onChange={ (e) => setTodo({...todo, id: e.target.value})} className="form-control mb-2"  type="number"/>
            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`} className="btn  me-2">Delete Todo with ID = {todo.id} </a>
            <h3>Updating an Item in an Array</h3>
            <input value={todo.title} onChange={(e)=> setTodo({...todo, title: e.target.value})} className="form-control mb-2" type="text"/>
            <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn  me-2">Update Title to {todo.title}</a>
        </div> 
        )
        
}

export default WorkingWithArrays;