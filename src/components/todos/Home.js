import React, { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";

const Home = () => {
  const dummytodos = ["todo1", "todo2"];
  const [todos, setTodo] = useState(dummytodos);
  console.log(todos);
  const handleTodos = (newTodo) => {
    //   const colonedData = [...todos];
    //   colonedData[0] = 'hoise naki';
    // setTodo([...colonedData, newTodo]);
    setTodo([...todos, newTodo]);
  };
  console.log(todos);
  return (
    <div>
      {todos.map((todo, index) => (
        <Todos key={index} todo={todo} />
      ))}
      <NewTodo onTodoData={handleTodos} />
    </div>
  );
};

export default Home;
