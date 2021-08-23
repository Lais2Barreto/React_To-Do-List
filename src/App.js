import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  //state para os inputs
  const [inputText, setInputText] = useState("");
  //state para os toDos
  const [todos, setTodos] = useState([]); 
  //array of objects (each one with the inputValue forming a todo)



  return (
    <div className="App">
      <header>
        <h1>Lah's To-do List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
      <ToDoList todos={todos} setTodos={setTodos}/> 
    </div>
  );
}

export default App;
