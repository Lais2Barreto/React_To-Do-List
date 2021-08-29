import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  //STATES
  //state para os inputs
  const [inputText, setInputText] = useState("");
  //state para os toDos
  const [todos, setTodos] = useState([]); 
  //array of objects (each one with the inputValue forming a todo)
  //state para o filtro (valor inicial 'all' como padrão):
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([])


  //usEeffect runs a function everytime a piece of state changes
  //MUST BE BELLOW OUR STATEs SO THAT IT CAN READ IT 

  //for this state I just want it to run when mounting the page
  //it gets the todos stored in the localstorage 
  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])

  //the error shown in the console is because we're creating the function outside our
  //useEffect and just calling it inside, but that's clearer to see (and I preffer it)

  //FUNCTIONS
  //filter the todos
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    } 
  }

  //save to localstorage (of the browser)
  //adding things to the localstorage
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }

  //checking if we have something to save or not
  //if we dont have, set an empty array
  //if we do, get it and push it up to the state
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Lah's To-do List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <ToDoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/> 
    </div>
  );
}

export default App;
