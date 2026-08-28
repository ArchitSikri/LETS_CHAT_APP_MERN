import React, { useState } from 'react'

const SendInput = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        console.log("Sending message:", message);
        setMessage("");
    }

    return (
        <form onSubmit={handleSubmit} className='px-4 py-3 bg-black/30 backdrop-blur-sm border-t border-white/10'>
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
