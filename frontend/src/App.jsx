import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signup from '../src/components/Signup'
import Login from '../src/components/Login'
import HomePage from '../src/components/HomePage'


const router = createBrowserRouter([
  {
    path : "/",
    element : <HomePage/>
  },
  {
    path : "/register",
    element : <Signup/>
  },
  {
    path : "/login",
    element : <Login/>
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
