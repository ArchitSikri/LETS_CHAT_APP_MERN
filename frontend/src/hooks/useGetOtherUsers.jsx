import React from 'react'
import {useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setOtherUsers } from '../redux/UserSlice'


const useGetOtherUsers = () => {
    const dispatch = useDispatch();
    useEffect(() => {

    const fetchOtherUsers = async () => {
      try{
        axios.defaults.withCredentials = true;  
        const res = await axios.get('http://localhost:5000/api/users/otherusers');
        dispatch(setOtherUsers(res.data));
      }catch(err){
        console.log(err)
      }
    }
    fetchOtherUsers();
  }, [dispatch])
}

export default useGetOtherUsers
