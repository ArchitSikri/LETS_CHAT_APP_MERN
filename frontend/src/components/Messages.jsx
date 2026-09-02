import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMsgs from '../hooks/useGetMsgs';
import { useSelector } from 'react-redux';

const Messages = () => {
    const messagesEndRef = useRef(null);
    useGetMsgs();
    const {messages} = useSelector(store => store.message);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    if(!messages) return;

    return (
        <div className='flex-1 overflow-auto px-4 py-4 simple-scrollbar'>
            <div className='flex flex-col gap-3'>
                {messages?.map((message) => (
                    <Message key={message._id} message={message} />
                ))}
                <div ref={messagesEndRef} />
            </div>
        </div>
    )
}

export default Messages
    