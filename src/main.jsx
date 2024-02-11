import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

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
  <React.StrictMode>
       <RouterProvider router={router} />
    </React.StrictMode>
)
