import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {setMessages} from "../redux/MsgSlice"

const useGetMsgs = () => {
    const {selectedUser} = useSelector(store => store.user);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const Fetchmsg = async () => {
            try{
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:5000/api/msg/getmsg/${selectedUser?._id}`)
                console.log(res)
                dispatch(setMessages(res.data))
            }catch(err){
                console.log(err)
            }
        }
        if(selectedUser?._id) {
            Fetchmsg();
        }
    },[selectedUser?._id, dispatch])
}

export default useGetMsgs
