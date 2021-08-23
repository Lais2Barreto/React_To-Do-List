import React from 'react';

//we get the prop that we created back in TodoList
const Todo = ({ text, todo, todos, setTodos }) => {
  //events (delete and stuff)
  const deleteHandler= () => {
    //filter - run through all,if the el doesn't match the id, it get's rid of it
    setTodos(todos.filter(element => element.id !== todo.id)) 
    console.log(todo)
  }

  const completeHandler = () => {
    //checking if the todo clicked has the same id from the state one
    setTodos(todos.map((item) => {
      if(item.id === todo.id) {
        //if it does, return an object and pass in whatever property the item already had using spread
        //check our object in Form; we created 3 attributes: text, completed and id; since I just want to change the
        //'completed' one from false to true, I must spread the rest as to keep it the way it is
        return {
          ...item, completed: !item.completed   //I want the attr to be opposite from what it is now
        }
      }
      //if it did not match the id, just return the item
      return item

    }));
  }
  //in order to update our UI with the css, we need to pass todo.completed to our className
  //in the li, using a conditional: if the completed is returned true, we add the class
  //completed, else, we pass nothing
  //based on that state, we toggle completed on or off
  return (
    <div className="todo">
      
      <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>

      <button onClick={completeHandler} className="complete-btn">
        <i  className="fas fa-check"></i>
      </button>

      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;