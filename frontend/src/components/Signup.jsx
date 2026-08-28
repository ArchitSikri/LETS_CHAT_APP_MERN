import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  }

  const Base_Url = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  
  const onSubmithandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${Base_Url}/api/users/register`, user, {
        headers: { "Content-Type": 'application/json' },
        withCredentials: true
      })
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Unable to create your account");
    }
    setUser({ fullName: "", username: "", password: "", confirmPassword: "", gender: "" })
  }

  return (
    <main className="min-h-screen bg-[url('https://c4.wallpaperflare.com/wallpaper/1023/370/544/dark-landscape-lake-hd-wallpaper-preview.jpg')] bg-cover bg-center flex items-center justify-center px-4 py-10">
      {/* Simple dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <section className="relative w-full max-w-md rounded-xl bg-black/50 backdrop-blur-md p-8 shadow-2xl border border-white/10">
        <div className="mb-6 text-center">
          <div className="mb-4 flex justify-center">
            <i className="ri-user-add-line text-5xl text-blue-400"></i>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-sm text-gray-300">Join the conversation</p>
        </div>

        <form onSubmit={onSubmithandler} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-200" htmlFor="full-name">
                Full name
              </label>
              <input
                value={user.fullName}
                onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                id="full-name"
                className="h-11 w-full rounded-lg bg-white/10 border border-white/20 px-4 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                type="text"
                placeholder="Your full name"
                required
              />
            </div>
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
                placeholder="Choose username"
                required
              />
            </div>
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
              placeholder="Create password"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-200" htmlFor="confirm-password">
              Confirm password
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              id="confirm-password"
              className="h-11 w-full rounded-lg bg-white/10 border border-white/20 px-4 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
              type="password"
              placeholder="Repeat password"
              required
            />
          </div>

          <fieldset className="space-y-2">
            <legend className="text-sm font-medium text-gray-200">Gender</legend>
            <div className="flex gap-3">
              <label className={`flex-1 cursor-pointer rounded-lg px-4 py-2 text-sm text-gray-200 border transition-colors ${
                user.gender === "male" ? 'bg-blue-600/30 border-blue-500' : 'bg-white/5 border-white/20 hover:bg-white/10'
              }`}>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={user.gender === "male"}
                    onChange={() => handleCheckbox("male")}
                    name="gender"
                    value="male"
                    className="radio radio-primary radio-sm"
                  />
                  <span>Male</span>
                </div>
              </label>
              <label className={`flex-1 cursor-pointer rounded-lg px-4 py-2 text-sm text-gray-200 border transition-colors ${
                user.gender === "female" ? 'bg-pink-600/30 border-pink-500' : 'bg-white/5 border-white/20 hover:bg-white/10'
              }`}>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={user.gender === "female"}
                    onChange={() => handleCheckbox("female")}
                    name="gender"
                    value="female"
                    className="radio radio-secondary radio-sm"
                  />
                  <span>Female</span>
                </div>
              </label>
            </div>
          </fieldset>

          <button 
            type="submit" 
            className="mt-4 h-11 w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            Create Account
          </button>

          <p className="pt-2 text-center text-sm text-gray-300">
            Already have an account?{' '}
            <Link className="font-semibold text-blue-400 hover:text-blue-300 transition-colors" to="/login">
              Log in
            </Link>
          </p>
        </form>
      </section>
    </main>
  )
}

export default Signup
