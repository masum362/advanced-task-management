import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div data-theme={theme} className='bg-bgColor w-full border-2 flex flex-col gap-4'>
      <Outlet />
    </div>
  )
}

export default App
