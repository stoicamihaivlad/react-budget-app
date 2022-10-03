import React from 'react'

export default function ToDo({todo}) {
  return (
    <div> 
        <label>
            <input type="checkbox" checked={todo.complete}></input>
            {todo.name}
        </label>
        
    </div>
  )
}
