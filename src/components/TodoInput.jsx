import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {v4 as uuid} from "uuid"
import { addTodo } from '../action';
const TodoInput = () => {
    const [title,setTitle]= useState("");
    const dispatch = useDispatch();
    const handleAdd=()=>{
        const payload = {
            title,
            status:false,
            id:uuid
        };
        const addTodoAction = addTodo(payload);
        dispatch(addTodoAction)
    }
  return (
    <div>
        <h2>Add Todo</h2>
        <input type="text"placeholder='add something'
        value={title}
        onChange={((e)=>setTitle(e.target.value))} />
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput