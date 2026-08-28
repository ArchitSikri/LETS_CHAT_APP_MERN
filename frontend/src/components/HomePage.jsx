import React from 'react'
import Sidebar from './Sidebar'
import MessagesContainer from './MessagesContainer'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[url('https://c4.wallpaperflare.com/wallpaper/1023/370/544/dark-landscape-lake-hd-wallpaper-preview.jpg')] bg-cover bg-center flex items-center justify-center p-4">
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Main Container */}
      <div className='relative z-10 flex sm:h-[450px] md:h-[550px] lg:h-[600px] w-full max-w-6xl rounded-xl overflow-hidden bg-black/40 backdrop-blur-md shadow-2xl border border-white/10'>
        <Sidebar />
        <MessagesContainer />
      </div>
    </div>
  )
}

export default HomePage
