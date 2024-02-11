import React from 'react'
import ToggleBtn from './ToggleBtn'

const Navbar = () => {
  return (
    <div className='py-4 md:px-12 bg-primaryColor flex items-center justify-between '>
        <div className='text-blueColor font-bold text-3xl px-4 
        '>
            <h1>TodoApp</h1>
        </div>
        <div className='px-4'>
        <ToggleBtn />
        </div>
    </div>
  )
}

export default Navbar