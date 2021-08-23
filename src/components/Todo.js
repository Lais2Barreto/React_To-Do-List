import React from 'react';

//pegamos a prop q criamos la no TodoList
const Todo = ({ text, todo, todos, setTodos }) => {
  //events (delete and stuff)
  const deleteHandler= () => {
    //filtra - percorre todos, e se o elemento não corresponder ao id, livra-se dele
    setTodos(todos.filter(element => element.id !== todo.id)) 
    console.log(todo)
  }


  return (
    <div className="todo">
      <li className="todo-item">{text}</li>

      <button className="complete-btn">
        <i  className="fas fa-check"></i>
      </button>

      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;