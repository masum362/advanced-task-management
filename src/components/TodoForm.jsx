import React, { useContext } from 'react'
import { TiDelete } from "react-icons/ti";
import { ThemeContext } from '../context/ThemeContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const TodoForm = ({ todo, setIsUpdate }) => {

    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    const { successMsg, setSuccessMsg } = useContext(ThemeContext)
    const { isOpen, setIsOpen } = useContext(ThemeContext)


    const formik = useFormik({
        initialValues: {
            todoContent: todo ? todo.text : '',
            todoPriority: todo ? todo.priority : 'low',
            todoStatus: todo ? todo.status : 'incomplete',
        },
        validationSchema: Yup.object({
            todoContent: Yup.string().required('Required'),
            todoPriority: Yup.string().required('Required'),
            todoStatus: Yup.string().required('Required'),
        }),
        onSubmit: values => {

            const filteredTodo = todos.filter(item => item.id === todo?.id)
            if (filteredTodo.length > 0) {
                filteredTodo[0].text = values.todoContent
                filteredTodo[0].priority = values.todoPriority
                filteredTodo[0].status = values.todoStatus
                setSuccessMsg("Successfully updated Todo");
            } else {
                todos.unshift({
                    id: todos.length + 1 || 1,
                    text: values.todoContent,
                    priority: values.todoPriority,
                    status: values.todoStatus
                });
                setSuccessMsg("Successfully created Todo");
            }
            localStorage.setItem("todos", JSON.stringify(todos));
            formik.resetForm({
                todoContent: '',
                todoPriority: '',
                todoStatus: '',
            });
            
            setIsOpen(false);
            setIsUpdate(false);
        },
    });






    return (

        <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center h-screen w-full '>

            <div className='bg-secondaryColor rounded-lg lg:w-[50%] flex flex-col items-center justify-center p-4 '>
                <div className='flex justify-end w-full items-center px-4'>
                    <TiDelete size={40} className='cursor-pointer' onClick={() => {
                         setIsOpen(false)
                        setIsUpdate(false)
                    }} />

                </div>
                <form onSubmit={formik.handleSubmit} className='lg:w-[50%] py-6 flex flex-col items-center justify-center gap-8 transition-all duration-300'>

                    <div className='w-full flex flex-col items-start justify-center transition-all duration-300'>
                        <input type="text" placeholder="Type here" name='todoContent' className="input input-bordered w-full max-w-xs bg-bgColor " value={formik.values.todoContent} onChange={formik.handleChange} />

                        {formik.touched.todoContent && formik.errors.todoContent ? (
                            <div className="text-dangerColor">
                                <span className='text-start'>{formik.errors.todoContent}</span>
                            </div>
                        ) : null}
                    </div>

                    <div className='w-full transition-all duration-300'>
                        <select name="todoPriority" id="priority" className="select w-full max-w-xs bg-bgColor" onChange={formik.handleChange} value={formik.values.todoPriority}>
                            <option disabled selected >select the priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>

                        {formik.touched.todoPriority && formik.errors.todoPriority ? (
                            <div className="text-dangerColor">
                                <span className='text-start'>{formik.errors.todoPriority}</span>
                            </div>
                        ) : null}
                    </div>
                    <div className='w-full transition-all duration-300'>
                        <select name="todoStatus" id="status" className="select w-full max-w-xs bg-bgColor" onChange={formik.handleChange} value={formik.values.todoStatus}>
                            <option disabled selected>select the status</option>
                            <option value="incomplete">Incomplete</option>
                            <option value="completed">Completed</option>
                        </select>

                        {formik.touched.todoStatus && formik.errors.todoStatus ? (
                            <div className="text-dangerColor">
                                <span className='text-start'>{formik.errors.todoStatus}</span>
                            </div>
                        ) : null}
                    </div>
                    <button type="submit" className=' px-6 py-2 bg-blueColor text-whiteColor rounded-lg '>Add</button>
                </form>
            </div>
        </div>

    )
}

export default TodoForm