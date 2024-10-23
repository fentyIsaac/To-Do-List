// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    setTodos([...todos, task]);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">To-Do List</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <AddTodo addTask={addTask} />
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default App;
