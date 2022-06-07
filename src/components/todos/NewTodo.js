import React, { useState } from "react";

const NewTodo = ({ onTodoData }) => {
  const [todo, setTodo] = useState("");
  const handleInput = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onTodoData(todo);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Add New Todo"></label>
        <input type="text" onChange={handleInput} value={todo} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodo;
