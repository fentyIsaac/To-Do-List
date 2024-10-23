// src/components/TodoList.js
import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul className="list-group mt-3">
      {todos.map((todo, index) => (
        <li key={index} className="list-group-item">
          {todo}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
