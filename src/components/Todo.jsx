import React from 'react'
import { useSelector } from 'react-redux'

const Todo = () => {
    const todos = useSelector((state)=>state.todos)
    //console.log(todos)
  return (
    <div>{todos.map((todo)=><div key={todo.id}>{todo.title}</div>)}</div>
  )
}

export default Todo