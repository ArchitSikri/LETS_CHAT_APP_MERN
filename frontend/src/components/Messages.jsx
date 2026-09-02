import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMsgs from '../hooks/useGetMsgs';
import { useSelector } from 'react-redux';

const getUserId = (user) => user?._id || user?.id;

const getSenderId = (message) => {
    const sender = message?.sendId || message?.senderId;
    return sender?._id || sender?.id || sender;
};

const Messages = () => {
    const messagesEndRef = useRef(null);
    useGetMsgs();
    const {messages} = useSelector(store => store.message);
    const {authUser, selectedUser} = useSelector(store => store.user);
    const authUserId = getUserId(authUser);
    const selectedUserId = getUserId(selectedUser);
    const visibleMessages = Array.isArray(messages)
        ? messages.filter((message) => {
            const senderId = getSenderId(message);
            return message?._id && (
                String(senderId) === String(authUserId) ||
                String(senderId) === String(selectedUserId)
            );
        })
        : [];

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    if(!messages) return;

    return (
        <div className='flex-1 overflow-auto px-4 py-4 simple-scrollbar'>
            <div className='flex flex-col gap-3'>
                {visibleMessages.map((message) => (
                    <Message key={message._id} message={message} />
                ))}
                <div ref={messagesEndRef} />
            </div>
        </div>
    )
}

export default Messages