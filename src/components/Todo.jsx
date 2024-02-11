import React, { useContext, useState } from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext';
import TodoForm from './TodoForm';

const Todo = ({ todo, setSuccessMsg }) => {

    console.log(todo.priority)
    let priorityClass = '';
    switch (todo.priority) {
        case 'low':
            priorityClass = 'bg-lowPriority';
            break;
        case 'medium':
            priorityClass = 'bg-mediumPriority';
            break;
        case 'high':
            priorityClass = 'bg-highPriority';
            break;
        default:
            priorityClass = ''; // Default background color
    }

    const { todos } = useContext(ThemeContext)
    const [isUpdate, setIsUpdate] = useState(false);



    const handleDelete = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setSuccessMsg("Deleted successfully")
        localStorage.setItem("todos", JSON.stringify(filteredTodos));
    }


    return (
        <div key={todo.id} className={`flex items-center justify-between  p-8 shadow-blueColor shadow-sm mt-1 ${priorityClass} transition-all duration-300`}>
            <h1 className='text-xl '> {todo.text} <div className="badge bg-blueColor text-whiteColor">{todo.status}</div></h1>

            <div className='flex items-center justify-center gap-8'>
                <FaEdit className=' cursor-pointer' onClick={() => setIsUpdate(!isUpdate)} />
                <FaTrashAlt onClick={() => handleDelete(todo.id)} className=' cursor-pointer' />
            </div>
            {isUpdate && <TodoForm todo={todo} setIsUpdate={setIsUpdate} />}
        </div>
    )
}

export default Todo