import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Todos from './components/Todos.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children:[
        {
          path: "/",
          element:<Home />
        },
        {
          path:"todos",
          element:<Todos />
        }
      ]
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <ThemeProvider>
    <React.StrictMode>
       <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeProvider>
)
