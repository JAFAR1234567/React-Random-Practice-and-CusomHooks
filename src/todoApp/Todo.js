import React from 'react'

const Todo = ({todo,onRemoveTodo}) => {
 const {newTodo,id} = todo;
    const {title,desc} = newTodo; 
    const handleDelete =(id)=>{
      onRemoveTodo(id)
    }
  return (
    <div style={{backgroundColor:'green',width:'500px'}}>
        <article style={{backgroundColor:'green',padding:'15px',margin:'30px'}}>
        <h3>{title}</h3>
        <h5>{desc}</h5>
        <button onClick={()=>handleDelete(id)}>Delete</button>
        </article>
    </div>
  )
}

export default Todo