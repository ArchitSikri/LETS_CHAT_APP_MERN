import React from 'react'
import { useSelector } from 'react-redux'
import { getAvatarFallback } from '../utils/avatar';

const Message = ({ message }) => {
    const { authUser, selectedUser } = useSelector(store => store.user);
    const authUserId = authUser?._id || authUser?.id;
    const selectedUserId = selectedUser?._id || selectedUser?.id;
    const sender = message?.sendId || message?.senderId;
    const senderId = sender?._id || sender?.id || sender;
    const isMyMessage = String(senderId) === String(authUserId);
    const isSelectedUserMessage = String(senderId) === String(selectedUserId);
    const senderName = isMyMessage
        ? authUser?.fullName
        : isSelectedUserMessage
            ? selectedUser?.fullName
            : 'Unknown user';

    return (
        <div className={`chat ${isMyMessage ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        src={isMyMessage
                            ? authUser?.profilePhoto || getAvatarFallback(authUser?.fullName)
                            : selectedUser?.profilePhoto || getAvatarFallback(selectedUser?.fullName)}
                        onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src = getAvatarFallback(isMyMessage ? authUser?.fullName : selectedUser?.fullName);
                        }}
                        alt="profile" 
                        className='object-cover'
                    />
                </div>
            </div>
            <div className="chat-header text-gray-300 text-xs mb-1">
                By {senderName}
                <time className="text-xs opacity-60 ml-1">{message.createdAt}</time>
            </div>
            <div className={`chat-bubble ${
                isMyMessage 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 text-white'
            } max-w-xs md:max-w-md break-words`}>
                {message.message}
            </div>
        </div>
    )
}

export default Message
