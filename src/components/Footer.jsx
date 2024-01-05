import React from 'react'

const Footer = () => {
  return (
    <div className='w-[100%] bg-green py-2'>
      <div className="w-[80%] m-auto flex flex-col gap-2">
        <p className='text-sm text-center text-orange font-semibold'>&#169;	2024 <span className='text-cream font-normal'>{" "}link</span><span className='text-orange font-semibold'>nest</span></p>
        <p className='text-sm text-center text-cream'>Made with 💙 in Bharat</p>
      </div>
    </div>
  )
}

export default Footer