import React, { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import { v4 as uuidv4 } from "uuid";
const Home = () => {
  const [todo, setTodo] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodo((prev) => {
      return [...prev, { id: uuidv4(), newTodo }];
    });
  };
  const handleRemoveTOdo = (id) => {
    setTodo((prevTodos) => {
      const filterdTodos = prevTodos.filter((todos) => todos.id !== id);
      return filterdTodos;
    });
  };
  return (
    <div>
      <NewTodo onTodoData={handleAddTodo} />
      <Todos data={todo} onRemoveTodo={handleRemoveTOdo} />
    </div>
  );
};

export default Home;
