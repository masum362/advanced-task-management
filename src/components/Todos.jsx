import React, { useContext, useEffect, useState } from 'react'
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { ThemeContext } from '../context/ThemeContext';
import Todo from './Todo';
import TodoForm from './TodoForm';


const Todos = () => {


  const { todos } = useContext(ThemeContext)
  const { successMsg, setSuccessMsg } = useContext(ThemeContext)


  useEffect(() => {
    setTimeout(() => {
      setSuccessMsg("")
    }, 2000);
  }, [todos])


  return (
    <div className=' h-screen overflow-y-auto w-[80%] m-auto transition-all duration-300'>
      <p className='text-green-500'>{successMsg}</p>
      {todos?.map(todo => {
        return (
          <>
            <Todo todo={todo} key={todo.id} setSuccessMsg={setSuccessMsg} />
          </>

        )
      })}

    </div>
  )
}

export default Todos