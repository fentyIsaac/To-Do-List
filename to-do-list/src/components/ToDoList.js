const TodoItem = ({ task, toggleComplete, deleteTask }) => (
  <div>
    <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text}
    </span>
    <button onClick={toggleComplete}>Complete</button>
    <button onClick={deleteTask}>Delete</button>
  </div>
);

const TodoList = ({ tasks, toggleComplete, deleteTask }) => (
  <div>
    {tasks.map((task, index) => (
      <TodoItem
        key={index}
        task={task}
        toggleComplete={() => toggleComplete(index)}
        deleteTask={() => deleteTask(index)}
      />
    ))}
  </div>
);
