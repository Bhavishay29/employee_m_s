import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl '>
           <form className='flex flex-col justify-center items-center' >
            <input className='text-xl text-white py-3 px-5 outline-none rounded-full bg-transparent border-2 border-emerald-600  placeholder:text-gray-400' type="email" placeholder='please enter your email'/>
            <input  className='text-xl text-white py-3 px-5 outline-none rounded-full bg-transparent border-2 border-emerald-600 mt-3 placeholder:text-gray-400' type="password" placeholder='please enter your password'/> 
            <button className='text-xl  py-3 px-8 outline-none text-white rounded-full bg-emerald-700 mt-7    border-none  hover:bg-emerald-600 font-semibold w-full'>Log in</button>
           </form>
        </div>
    
    </div>
  )
}

export default Login
