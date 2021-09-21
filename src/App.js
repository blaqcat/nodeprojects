import './App.css';
import TodoList from './TodoList'
import React, { useState, useRef} from 'react'

function App() {
  const [todos, setTodos] =useState([])
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: 1, name: name, complete: false}]
    })
    console.log(name)
    todoNameRef.current.value = null

  }
  
  return (
    <React.Fragment>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo}>Add ToDo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>

    </React.Fragment>
  )
}

export default App;
