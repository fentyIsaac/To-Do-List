import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddToDo';
import TodoList from './components/ToDoList';


const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo addTask={addTask} />
      <TodoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
};

export default App;