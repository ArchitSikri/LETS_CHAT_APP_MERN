import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import { setMessages } from '../redux/MsgSlice';



const SendInput = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const {selectedUser} = useSelector(store=>store.user);
    const {messages} = useSelector(store=>store.message);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:5000/api/msg/sendmsg/${selectedUser?._id}`, {message}, {
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });     
            if (res?.data?._id) {
                dispatch(setMessages([...(Array.isArray(messages) ? messages : []), res.data]));
            }
        } catch (error) {
            console.log(error);
        } 
        setMessage("");
    }

    return (
        <form onSubmit={onSubmitHandler} className='px-4 py-3 bg-black/30 backdrop-blur-sm border-t border-white/10'>
            <div className='flex items-center gap-2'>
                <button 
                    type='button' 
                    className='p-2 hover:bg-white/10 rounded-lg transition-colors'
                >
                    <i className='ri-emotion-happy-line text-xl text-gray-300'></i>
                </button>
                
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    className='flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:border-blue-500 focus:outline-none transition-colors'
                    placeholder='Type a message...'
                />
                
                <button 
                    type='submit'
                    disabled={!message.trim()}
                    className='p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded-lg transition-colors'
                >
                    <i className='ri-send-plane-fill text-xl'></i>
                </button>
            </div>
        </form>
    )
}

export default SendInput
