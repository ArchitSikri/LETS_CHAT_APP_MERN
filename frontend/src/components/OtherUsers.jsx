import React from 'react'
import OtherUser from './otherUser';
import { useSelector } from "react-redux";

const OtherUsers = () => {
    const { otherUsers } = useSelector(store => store.user);
    
    // Dummy data for UI demonstration
    const dummyUsers = [
        { _id: "1", fullName: "John Doe", profilePhoto: "https://i.pravatar.cc/150?img=12", isOnline: true },
        { _id: "2", fullName: "Jane Smith", profilePhoto: "https://i.pravatar.cc/150?img=47", isOnline: false },
        { _id: "3", fullName: "Mike Johnson", profilePhoto: "https://i.pravatar.cc/150?img=13", isOnline: true },
        { _id: "4", fullName: "Sarah Williams", profilePhoto: "https://i.pravatar.cc/150?img=32", isOnline: false },
        { _id: "5", fullName: "David Brown", profilePhoto: "https://i.pravatar.cc/150?img=14", isOnline: true },
        { _id: "6", fullName: "Emily Davis", profilePhoto: "https://i.pravatar.cc/150?img=44", isOnline: false },
        { _id: "7", fullName: "Chris Wilson", profilePhoto: "https://i.pravatar.cc/150?img=11", isOnline: true },
        { _id: "8", fullName: "Lisa Anderson", profilePhoto: "https://i.pravatar.cc/150?img=45", isOnline: false }
    ];

    const usersToDisplay = otherUsers || dummyUsers;

    if (!usersToDisplay || usersToDisplay.length === 0) {
        return (
            <div className='flex flex-col items-center justify-center h-full text-gray-400 gap-2'>
                <i className='ri-user-search-line text-4xl'></i>
                <p className='text-sm'>No users found</p>
            </div>
        );
    }

    return (
        <div className='space-y-1'>
            {usersToDisplay?.map((user) => (
                <OtherUser key={user._id} user={user} />
            ))}
        </div>
    )
}

export default OtherUsers
