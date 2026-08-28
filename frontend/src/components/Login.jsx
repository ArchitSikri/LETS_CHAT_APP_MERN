import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/UserSlice';

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/api/users/login`, user, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      });
      if (res.data) {
        toast.success("Logged in successfully");
        navigate("/homepage");
        dispatch(setAuthUser(res.data))
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to log in");
    }
    setUser({ username: "", password: "" })
  }

  return (
    <main className="min-h-screen bg-[url('https://c4.wallpaperflare.com/wallpaper/1023/370/544/dark-landscape-lake-hd-wallpaper-preview.jpg')] bg-cover bg-center flex items-center justify-center px-4 py-10">
      {/* Simple dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <section className="relative w-full max-w-md rounded-xl bg-black/50 backdrop-blur-md p-8 shadow-2xl border border-white/10">
        <div className="mb-6 text-center">
          <div className="mb-4 flex justify-center">
            <i className="ri-chat-smile-3-line text-5xl text-blue-400"></i>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-sm text-gray-300">Login to your account</p>
        </div>

        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-200" htmlFor="username">
              Username
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              id="username"
              className="h-11 w-full rounded-lg bg-white/10 border border-white/20 px-4 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
              type="text"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-200" htmlFor="password">
              Password
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              id="password"
              className="h-11 w-full rounded-lg bg-white/10 border border-white/20 px-4 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button 
            type="submit" 
            className="mt-4 h-11 w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            Login
          </button>

          <p className="pt-2 text-center text-sm text-gray-300">
            Don't have an account?{' '}
            <Link className="font-semibold text-blue-400 hover:text-blue-300 transition-colors" to="/">
              Sign up
            </Link>
          </p>
        </form>
      </section>
    </main>
  )
}

export default Login
