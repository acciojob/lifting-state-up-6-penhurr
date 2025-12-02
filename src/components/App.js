
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {

  const [todos, setTodos] = useState([
    {id:1,task:"Learn React",completed:false},
    {id:2,task:"Build a React app",completed:false},
    {id:3,task:"Deploy the React app",completed:false}
  ])

  console.log(todos)

  function handleComplete(id){
    setTodos(todos.map(todo => 
      todo.id == id ? {...todo, completed: true} : todo)
    )
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        
        <TodoList todos={todos} setTodos={setTodos} handleComplete={handleComplete} />
    </div>
  )
}

export default App
