import React, { useState } from 'react'
import OtherUsers from './OtherUsers';
import { useSelector, useDispatch } from "react-redux";
import { setOtherUsers } from '../redux/UserSlice';
import toast from "react-hot-toast";
import useGetOtherUsers from '../hooks/useGetOtherUsers';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const Sidebar = () => {
    const nevigate = useNavigate()
    
    const [search, setSearch] = useState("");
    const { otherUsers, authUser } = useSelector(store => store.user);
    const dispatch = useDispatch();

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (!search.trim()) return;
        
        const conversationUser = otherUsers?.find((user) => 
            user.fullName.toLowerCase().includes(search.toLowerCase())
        );
        
        if (conversationUser) {
            dispatch(setOtherUsers([conversationUser]));
        } else {
            toast.error("User not found!");
        }
    }

    const logoutHandler = async () => {
        const res = await axios.get('http://localhost:5000/api/users/logout');
        nevigate("/login");
        toast.success(res.data.message);
    }

    return (
        <div className='border-r border-white/10 p-4 flex flex-col w-full sm:w-80 bg-black/30'>
            {/* Profile Section */}
            <div className='bg-white/5 backdrop-blur-sm p-3 rounded-lg mb-4 border border-white/10'>
                <div className='flex-1 text-white'>
                    <p className='font-semibold'>{authUser?.fullName || "User"}</p>
                    <p className='text-xs text-green-400 flex items-center gap-1'>
                        <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                        Online
                    </p>
                </div>
            </div>

            {/* Search Form */}
            <form onSubmit={searchSubmitHandler} className='flex items-center gap-2 mb-4'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:border-blue-500 focus:outline-none transition-colors' 
                    type="text"
                    placeholder='Search users...'
                />
                <button 
                    type='submit' 
                    className='p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'
                >
                    <i className='ri-search-line text-xl'></i>
                </button>
            </form>

            {/* Divider */}
            <div className="h-px bg-white/10 my-3"></div>

            {/* Users List */}
            <div className='flex-1 overflow-auto simple-scrollbar'>
                <OtherUsers />
            </div>

            {/* Logout Button */}
            <div className='mt-4 pt-4 border-t border-white/10'>
                <button 
                    onClick={logoutHandler} 
                    className='w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center justify-center gap-2 font-medium transition-colors'
                >
                    <i className='ri-logout-box-line'></i>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Sidebar
