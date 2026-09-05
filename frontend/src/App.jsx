import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signup from '../src/components/Signup'
import Login from '../src/components/Login'
import HomePage from '../src/components/HomePage'
import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import io from 'socket.io-client'
import { setOnlineUsers } from './redux/UserSlice'

const router = createBrowserRouter([
  {
    path : "/homepage",
    element : <HomePage/>
  },
  {
    path : "/",
    element : <Signup/>
  },
  {
    path : "/signup",
    element : <Signup/>
  },
  {
    path : "/login",
    element : <Login/>
  }
])

const App = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);
  
  useEffect(() => {
    if (!authUser) {
      return;
    }

    const socket = io('http://localhost:5000', {
      query: { userId: authUser._id || authUser.id }
    });

    socket.on('getonlineusers', (onlineUserIds) => {
      dispatch(setOnlineUsers(Array.isArray(onlineUserIds)
        ? onlineUserIds
        : Object.keys(onlineUserIds || {})));
    });

    return () => {
      socket.close();
    };
  }, [authUser, dispatch])

  return <RouterProvider router={router} />
}

export default App
