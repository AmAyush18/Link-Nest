import React from 'react'
import Hero from './Hero'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full min-h-[83vh] bg-cream pb-8'>
        <Hero/>
        <div className='w-[90%] m-auto mt-14'>
            <div className='flex flex-col gap-3 text-center text-green'>
              <p className='text-xl font-semibold'>Unlock a world of organized possibilities – Sign up for <span className='bg-dark-green text-orange px-2 rounded-lg'><span className='text-cream'>link</span>nest</span> today!
              </p>
              <div>
                <Link to={"/signup"}>
                  <button className='text-sm py-2 px-3 bg-dark-green hover:bg-opacity-90 rounded-lg text-cream'>
                      Sign Up
                  </button>
                </Link>

              </div>
            </div>
        </div>
    </div>
  )
}

export default Home