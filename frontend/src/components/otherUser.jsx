import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from '../redux/UserSlice';
import { getAvatarFallback } from '../utils/avatar';

const OtherUser = ({ user }) => {
    const dispatch = useDispatch();
    const { selectedUser, onlineUsers } = useSelector(store => store.user);
    
    const isOnline = user.isOnline || onlineUsers?.includes(user._id);
    
    const selectedUserHandler = (user) => {
        dispatch(setSelectedUser(user));
    }

    return (
        <div 
            onClick={() => selectedUserHandler(user)} 
            className={`${
                selectedUser?._id === user?._id 
                    ? 'bg-blue-600/30 border-l-4 border-blue-500' 
                    : 'hover:bg-white/5'
            } flex gap-3 items-center rounded-lg p-3 cursor-pointer transition-colors mb-1`}
        >
            <div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
                <div className='w-12 h-12 rounded-full'>
                    <img
                        src={user?.profilePhoto || getAvatarFallback(user?.fullName)}
                        onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src = getAvatarFallback(user?.fullName);
                        }}
                        alt="user-profile" 
                        className='object-cover rounded-full'
                    />
                </div>
            </div>
            <div className='flex flex-col flex-1 overflow-hidden'>
                <div className='flex justify-between items-center gap-2'>
                    <p className='font-semibold text-white truncate'>{user?.fullName}</p>
                    {isOnline && (
                        <span className='text-xs text-green-400'>●</span>
                    )}
                </div>
                <p className='text-xs text-gray-400 truncate'>
                    {isOnline ? 'Active now' : 'Offline'}
                </p>
            </div>
        </div>
    )
}

export default OtherUser
