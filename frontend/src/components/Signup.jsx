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
      try{
        const res = await axios.post(`${Base_Url}/api/users/register` , user , {
           headers : {
            "Content-Type" : 'application/json'
          },
          withCredentials : true  
        })

        if (res.data.success) {
         navigate("/login");
         toast.success(res.data.message);
        }
      }catch(err){
        toast.error(err.response?.data?.message || "Unable to create your account");
      }
      setUser({
       fullName: "",
       username: "",
       password: "",
       confirmPassword: "",
       gender: "",
      })
 
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[url('https://c4.wallpaperflare.com/wallpaper/1023/370/544/dark-landscape-lake-hd-wallpaper-preview.jpg')] bg-cover bg-center px-4 py-10 text-white">
      <div className="absolute inset-0 bg-slate-950/65" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-transparent to-rose-950/40" />

      <section className="relative w-full max-w-xl rounded-lg border border-white/20 bg-slate-950/55 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-9">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Join the conversation</p>
          <h1 className="text-4xl font-bold tracking-tight">Create your account</h1>
          <p className="mt-2 text-sm text-slate-300">A little closer to the people who matter.</p>
        </div>

        <form onSubmit={onSubmithandler} action="" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="full-name">Full name</label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              id="full-name"
              className="h-11 w-full rounded-md border border-white/15 bg-white/10 px-4 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:bg-white/15 focus:ring-2 focus:ring-cyan-300/20"
              type="text"
              placeholder="Your full name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="username">Username</label>
            <input
              value = {user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              id="username"
              className="h-11 w-full rounded-md border border-white/15 bg-white/10 px-4 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:bg-white/15 focus:ring-2 focus:ring-cyan-300/20"
              type="text"
              placeholder="Choose a username" />
            </div>
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
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="confirm-password">Confirm password</label>
            <input
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              id="confirm-password"
              className="h-11 w-full rounded-md border border-white/15 bg-white/10 px-4 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:bg-white/15 focus:ring-2 focus:ring-cyan-300/20"
              type="password"
              placeholder="Repeat your password" />
          </div>
          <fieldset className="flex flex-wrap items-center gap-3 pt-2">
            <legend className="mb-2 w-full text-sm font-medium text-slate-200">Gender</legend>
            <label className="flex cursor-pointer items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/60">
              <input
                type="radio"
                checked={user.gender === "male"}
                onChange={() => handleCheckbox("male")}
                name="gender"
                value="male"  
                className="radio radio-info radio-sm" />
              Male
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/60">
              <input
                type="radio"
                checked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
                name="gender"
                value="female"
                className="radio radio-info radio-sm" />
              Female
            </label>
          </fieldset>
          <button type="submit" className="btn mt-3 h-11 w-full border-0 bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-200">Sign up</button>
          <p className="pt-2 text-center text-sm text-slate-300">Already have an account? <Link className="font-semibold text-cyan-300 transition hover:text-cyan-200" to="/login">Log in</Link></p>
        </form>
      </section>
    </main>
  )
}

export default Signup
