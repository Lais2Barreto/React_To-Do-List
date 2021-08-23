import React from 'react';

const Form = ({ inputText,setInputText,todos,setTodos }) => {
  //here I can write js code and functions
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  }

  //submit
  const submitToDoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id:Math.random() * 1000}
    ])
    //it has an array as parameter cuz the state todos is an array
    //the spread is because if thre is something already, pass it here too
    //we create an object with the info we want
    setInputText("") //we clean the input fields
    //to update our ui, we can add a value to the input to keep in check with
    //the state, equal the InputText (or else it's gonna set the inputText to
    //nothing but the text is still gonna show)
  }


  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;