import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {setMessages} from "../redux/MsgSlice"

const useGetMsgs = () => {
    const {selectedUser} = useSelector(store => store.user);
    const dispatch = useDispatch();
    const selectedUserId = selectedUser?._id || selectedUser?.id;
    
    useEffect(()=>{
        const Fetchmsg = async () => {
            try{
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:5000/api/msg/getmsg/${selectedUserId}`)
                dispatch(setMessages(Array.isArray(res.data) ? res.data : []))
            }catch(err){
                console.log(err)
            }
        }
        if(selectedUserId) {
            Fetchmsg();
        }
    }, [selectedUserId, dispatch])
}

export default useGetMsgs
