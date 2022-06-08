import React from "react";
import NewTodo from "./NewTodo";
import Todo from "./Todo";

const Todos = ({ data,onRemoveTodo }) => {
  return (
    <div>
      <h1>Todo App</h1>
      {data.map((todo) => (
        <Todo todo={todo} key={todo.id} onRemoveTodo={onRemoveTodo} />
      ))}
    </div>
  );
};

export default Todos;
