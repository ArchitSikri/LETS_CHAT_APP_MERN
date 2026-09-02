import React from 'react'
import { useSelector } from 'react-redux'
import Messages from './Messages'
import SendInput from './SendInput'
import { getAvatarFallback } from '../utils/avatar';

const MessagesContainer = () => {
    const { selectedUser, authUser } = useSelector(store => store.user);

    return ( 
        <>
            {selectedUser !== null ? (
                <div className='flex-1 flex flex-col bg-black/20'>
                    {/* Chat Header */}
                    <div className='bg-black/30 backdrop-blur-sm px-4 py-3 border-b border-white/10'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className={`avatar ${selectedUser?.isOnline ? 'online' : 'offline'}`}>
                                    <div className='w-12 h-12 rounded-full'>
                                        <img
                                            src={selectedUser?.profilePhoto || getAvatarFallback(selectedUser?.fullName)}
                                            onError={(event) => {
                                                event.currentTarget.onerror = null;
                                                event.currentTarget.src = getAvatarFallback(selectedUser?.fullName);
                                            }}
                                            alt="profile" 
                                            className='object-cover'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p className='text-white font-semibold'>{selectedUser?.fullName}</p>
                                    <p className='text-sm text-gray-400'>
                                        {selectedUser?.isOnline ? 'Active now' : 'Offline'}
                                    </p>
                                </div>
                            </div>
                            
                            <div className='flex items-center gap-2'>
                                <button className='p-2 hover:bg-white/10 rounded-lg transition-colors'>
                                    <i className='ri-phone-line text-white text-lg'></i>
                                </button>
                                <button className='p-2 hover:bg-white/10 rounded-lg transition-colors'>
                                    <i className='ri-vidicon-line text-white text-lg'></i>
                                </button>
                                <button className='p-2 hover:bg-white/10 rounded-lg transition-colors'>
                                    <i className='ri-more-2-fill text-white text-lg'></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <Messages />

                    {/* Send Input */}
                    <SendInput />
                </div>
            ) : (
                // Empty State
                <div className='flex-1 flex items-center justify-center bg-black/20'>
                    <div className='text-center px-4'>
                        <div className='mb-4'>
                            <i className='ri-message-3-line text-6xl text-white/50'></i>
                        </div>
                        <h2 className='text-2xl font-bold text-white mb-2'>
                            Welcome, {authUser?.fullName || 'User'}!
                        </h2>
                        <p className='text-gray-300'>
                            Select a conversation to start messaging
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}

export default MessagesContainer