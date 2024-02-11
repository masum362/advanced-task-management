import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import Todo from './Todo';


const Todos = () => {


  const { todos } = useContext(ThemeContext)
  const { successMsg, setSuccessMsg } = useContext(ThemeContext)


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