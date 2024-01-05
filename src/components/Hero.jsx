import React from 'react'
import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <div className='w-full'>
        <div className="w-[90%] m-auto flex-col md:flex-row flex items-center justify-between pt-10">
            <div className="w-[95%] md:w-[70%] m-auto py-5">
                <h1 className='text-[28px] md:text-[40px] font-semibold text-center text-green w-[90%] m-auto'> From <span className='text-orange'>bookmark</span> chaos to organized bliss, discover the <span className='text-orange'>freedom</span> of a perfectly tailored online experience.</h1>
            </div>
            <img src={hero} alt=" " className='w-[240px] h-[240px]' />
        </div>
    </div>
  )
}

export default Hero