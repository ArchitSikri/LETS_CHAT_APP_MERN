import React, { useEffect, useRef } from 'react'
import Message from './Message'

const Messages = () => {
    const messagesEndRef = useRef(null);

    // Dummy messages
    const dummyMessages = [
        { _id: "1", message: "Hey! How are you?", senderId: "other", createdAt: "10:30 AM" },
        { _id: "2", message: "I'm good! Thanks for asking. What about you?", senderId: "me", createdAt: "10:31 AM" },
        { _id: "3", message: "I'm doing great! Are we still on for the meeting tomorrow?", senderId: "other", createdAt: "10:32 AM" },
        { _id: "4", message: "Yes, absolutely! Looking forward to it. 😊", senderId: "me", createdAt: "10:33 AM" },
        { _id: "5", message: "Perfect! I'll prepare the presentation slides tonight.", senderId: "other", createdAt: "10:34 AM" },
        { _id: "6", message: "Sounds good! Let me know if you need any help.", senderId: "me", createdAt: "10:35 AM" }
    ];

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [dummyMessages]);

    return (
        <div className='flex-1 overflow-auto px-4 py-4 simple-scrollbar'>
            <div className='flex flex-col gap-3'>
                {dummyMessages?.map((message) => (
                    <Message key={message._id} message={message} />
                ))}
                <div ref={messagesEndRef} />
            </div>
        </div>
    )
}

export default Messages
