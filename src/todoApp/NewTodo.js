import React, { useState } from "react";

const NewTodo = ({onTodoData}) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  
  const { title, desc } = todo;
  const handleForm = (e) => {
    e.preventDefault();
    onTodoData(todo);
    setTodo({ title: "", desc: "" })
  };
  const handleInput = (e) => {
    setTodo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="formGroup">
          <label htmlFor="">Todo Title</label>
          <input
            type="text"
            name="title"
            onChange={handleInput}
            value={title}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Todo Description</label>
          <textarea name="desc" onChange={handleInput} value={desc} />
        </div>
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodo;
