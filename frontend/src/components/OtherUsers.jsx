import React from 'react'
import OtherUser from './otherUser';
import { useSelector } from "react-redux";
import useGetOtherUsers from '../hooks/useGetOtherUsers';

const OtherUsers = () => {
    useGetOtherUsers()
    const { otherUsers } = useSelector(store => store.user);

    const usersToDisplay = otherUsers;

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
