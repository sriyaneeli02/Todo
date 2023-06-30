import React, { useState } from "react";
import './index.css';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputValue("");
    }
  };

  const toggleTodoCompletion = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div>
      <h1 className="do">Todo List</h1>
      <input className="btns"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <h2 className="h">Add your Todo list by clicking on the button</h2>
      <button onClick={addTodo}className="btn">Add your list</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
            className="cb"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodoCompletion(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <h2>To Delete Ur Todo List click on button</h2>
            <button onClick={() => deleteTodo(todo.id)} className="btn2">Delete Todo list</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
