
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {

  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", completed: false }
  ])

  // console.log(todos)

  function handleComplete(id) {
    setTodos(todos.map(todo =>
      todo.id == id ? { ...todo, completed: true } : todo)
    )
    
    
  }

  console.log(todos);

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      
          
            <TodoList todos={todos} handleComplete={handleComplete} />
          
        
    </div>
  )
}

export default App
