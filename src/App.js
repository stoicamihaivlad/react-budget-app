import userEvent from '@testing-library/user-event';
import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos,setToDos ] = useState([])
  const todoNameRef = useRef()

  useEffect (() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setToDos(storedTodos)
  }, [])

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo (e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setToDos(prevTodos => {
      return [...prevTodos, {id: uuidv4 , name: name, complete:false}]

    })
    console.log(name)
    todoNameRef.current.value = null
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}> Add ToDo</button>
      <button> Clear ToDo</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
