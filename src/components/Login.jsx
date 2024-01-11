import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = () => {
    e.preventDefault();
    
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className='w-[90%] mx-auto flex items-center justify-center py-4'>
        <div className="mt-[5%] w-[75%] md:w-[50%] lg:w-[40%] border rounded-lg flex flex-col gap-y-4 shadow-xl border-violet bg-transparent bg-opacity-50 py-6 mb-12">
            <h1 className='text-[22px] mx-[10%] text-green font-[600] uppercase'> Log In and Explore!</h1>

            <form onSubmit={handleSubmit} className="w-[80%] mx-auto flex flex-col font-[500] gap-y-4">
              <div className="w-full flex flex-col gap-y-1">
                <label htmlFor="email" className='text-sm uppercase text-green'>Email</label>
                <input 
                  type="email" 
                  id='email' 
                  value={email}  
                  placeholder='user@email.com'
                  className='w-full border bg-transparent text-green bg-opacity-60 p-2 border-green' 
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div className="w-full flex flex-col gap-y-1">
                <label htmlFor="password" className='text-sm uppercase text-green'>Password</label>
                <div className="w-full relative mb-1">
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    id='password' 
                    value={password}  
                    placeholder='pass@123#$'
                    className='w-[100%] border text-green bg-transparent bg-opacity-60 p-2 border-green' 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    {
                      !showPassword? (
                          <AiOutlineEyeInvisible
                              className="absolute bottom-3 right-2 z-2 cursor-pointer text-green"
                              size={20}
                              onClick={() => setShowPassword(true)}
                          />
                        ) : (
                          <AiOutlineEye
                              className="absolute bottom-3 right-2 z-2 cursor-pointer  text-green"
                              size={20}
                              onClick={() => setShowPassword(false)}
                          />
                        )
                    }
                </div>
              </div>

              <div className='flex'>
                  <p className='text-sm text-green'>
                    {"Don't have an account? "}
                    <Link to={"/signup"} className='text-green underline'>Sign Up</Link>
                  </p>
              </div>

              <div className="w-full text-center">
                <button type='submit' className='bg-dark-green text-cream text-[16px] font-[500] uppercase py-2 px-3 rounded-lg'>Sign Up</button>
              </div>

            </form>
        </div>
      </div>
    </div>
  )
}

export default Login