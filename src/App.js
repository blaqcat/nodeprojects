import './App.css';
import TodoList from './TodoList'
import React from 'react'

function App() {
  return (
    <React.Fragment>
      <TodoList />
      <input type="text"/>
      <button>Add ToDo</button>
      <button>Clear Completed</button>

    </React.Fragment>
  )
}

export default App;
