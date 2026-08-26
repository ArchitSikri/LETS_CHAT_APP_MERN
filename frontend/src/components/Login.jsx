import { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';



const Login = () => {
   
  const [user , setUser] = useState({
    username :  "" ,
    password : "" 
  });

  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/api/users/login`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      if (res.data) {
        toast.success("Logged in successfully");
        navigate("/homepage");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to log in");
    }
    setUser({
      username: "",
      password: ""
    })
  }

   


     
  return (
   <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[url('https://c4.wallpaperflare.com/wallpaper/1023/370/544/dark-landscape-lake-hd-wallpaper-preview.jpg')] bg-cover bg-center px-4 py-10 text-white">
      <div className="absolute inset-0 bg-slate-950/65" />
      <div className="absolute inset-0 bg-linear-to-br from-cyan-950/40 via-transparent to-rose-950/40" />

      <section className="relative w-full max-w-xl rounded-lg border border-white/20 bg-slate-950/55 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-9">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Join the conversation</p>
          <h1 className="text-4xl font-bold tracking-tight">Login your account</h1>
          <p className="mt-2 text-sm text-slate-300">A little closer to the people who matter.</p>
        </div>

        <form action="" className="space-y-4" onSubmit={onSubmitHandler}>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="password">UserName</label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              id="Username"
              className="h-11 w-full rounded-md border border-white/15 bg-white/10 px-4 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:bg-white/15 focus:ring-2 focus:ring-cyan-300/20"
              type="Username"
              placeholder="Username" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="password">Password</label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              id="password"
              className="h-11 w-full rounded-md border border-white/15 bg-white/10 px-4 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:bg-white/15 focus:ring-2 focus:ring-cyan-300/20"
              type="password"
              placeholder="Create a password" />
          </div>
          
          
          <button type="submit" className="btn mt-3 h-11 w-full border-0 bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-200">Login</button>
          <p className="pt-2 text-center text-sm text-slate-300">create Account ?   <Link className="font-semibold text-cyan-300 transition hover:text-cyan-200" to="/">Signup</Link></p>
        </form>
      </section>
    </main>
  )
}

export default Login
