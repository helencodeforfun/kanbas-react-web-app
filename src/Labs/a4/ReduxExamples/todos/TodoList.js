import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  const { todos } = useSelector((state) => state.todosReducer);
  const [todo, setTodo] = useState({ title: "Learn Mongo" });
//   const [todo, setTodo] = useState([
//     { id: "1", title: "Learn React" },
//     { id: "2", title: "Learn Node"  }]);
//   const addTodo = (todo) => {
//     const newTodos = [ ...todos, { ...todo,
//       id: new Date().getTime().toString() }];
//     setTodos(newTodos);
//     setTodo({title: ""});
//   };
//   const deleteTodo = (id) => {
//     const newTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(newTodos);
//   };
//   const updateTodo = (todo) => {
//     const newTodos = todos.map((item) =>
//       (item.id === todo.id ? todo : item));
//     setTodos(newTodos);
//     setTodo({title: ""});
//   };
  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">'
      <TodoForm/>
      {/* <TodoForm
          todo={todo}
          setTodo={setTodo}
          addTodo={addTodo}
          updateTodo={updateTodo}/> */}
        {todos.map((todo) => (
        //   <TodoItem
        //     todo={todo}
        //     deleteTodo={deleteTodo}
        //     setTodo={setTodo} />
        <TodoItem todo={todo}/>
        ))}
        </ul>
        {/* <li className="list-group-item">
          <button onClick={() => addTodo(todo)}>Add</button>
          <button onClick={() => updateTodo(todo)}>
            Update </button>
          <input
            value={todo.title}
            onChange={(e) =>
              setTodo({
                ...todo,
                title: e.target.value,
              })
            }
          />
        </li> */}
        {/* {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button onClick={() => deleteTodo(todo.id)}>
              Delete </button>
            <button onClick={() => setTodo(todo)}>
              Edit </button>
            {todo.title}
          </li>
        ))} */}
    </div>
  );
}
export default TodoList;