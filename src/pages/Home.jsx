import React, { useContext, useEffect, useState } from 'react'
import TodoForm from '../components/TodoForm'
import Todos from '../components/Todos'
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
    const { isOpen, setIsOpen } = useContext(ThemeContext);
    const { todos, setTodos } = useContext(ThemeContext);
    const [completed, setCompleted] = useState(null);
    const totalTodos = JSON.parse(localStorage.getItem('todos')) || [];

    const getCompletedTasks = () => {
        const filteredCompletedTasks = totalTodos.filter(todo => todo.status === "completed");
        setCompleted(filteredCompletedTasks);
    }

    const handleCompletedTask = () => {
        setTodos(completed)
    }

    const handleTotalTask = () => {
        setTodos(totalTodos);
    }


    const handleFiltering = (value) => {
        const filteredResult = totalTodos.filter(todo => todo.priority === value)
        setTodos(filteredResult)
    }

    useEffect(() => {
        getCompletedTasks();
    }, [todos])






    return (
        <div className='flex flex-col gap-4 '>
            <div className='sm:w-[80%] m-auto lg:mt-20 flex  items-center justify-between flex-col sm:flex-row'>
                <h1 className='px-4 py-2 bg-blueColor text-whiteColor w-40 rounded-lg text-xl text-center font-semibold cursor-pointer' onClick={() => setIsOpen(!isOpen)}>Add Todo</h1>
            </div>
            <div className='sm:w-[80%] m-auto flex flex-col sm:flex-row items-center justify-between gap-4'>
                <div className='flex items-center justify-center flex-col sm:flex-row gap-8'>
                    <div className='flex items-center justify-center py-4 gap-2 rounded-lg bg-primaryColor cursor-pointer w-52' onClick={handleTotalTask}>
                        <h1 className='  text-xl font-bold' >Total </h1>
                        <div className="badge bg-secondaryColor">{totalTodos?.length}</div>
                    </div>
                    <div className='flex flow-row items-center justify-center py-4 gap-2 rounded-lg bg-primaryColor cursor-pointer w-52' onClick={handleCompletedTask}>
                        <h1 className='  text-xl font-bold' >Completed</h1>
                        <div className="badge bg-secondaryColor">{completed?.length}</div>
                    </div>
                </div>

                <div className='flex w-full sm:w-1/2 items-center justify-center gap-4 flex-col md:flex-row '>
                    <h1 className=' cursor-pointer text-xl capitalize'>filter with:</h1>
                    <select name="todoPriority" id="priority" className="select w-full md:max-w-xs bg-primaryColor" onChange={(e) => handleFiltering(e.target.value)} >
                        <option disabled selected >select the priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>
            {
                isOpen && <TodoForm />
            }
            <Todos />
        </div>
    )
}

export default Home