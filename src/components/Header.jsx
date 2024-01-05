import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const navOptions = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Collections',
    url: '/collections'
  },
  {
    title: 'About',
    url: '/about'
  },
  {
    title: 'Login',
    url: '/login'
  },
]
const Header = () => {
  return (
    <div className='w-full bg-cream py-3'>
      <div className='w-[90%] m-auto flex items-center justify-between'>
        <Link to={"/"}>
          <h1 className='text-2xl text-orange font-thin'>link<span className='text-blue font-bold'>nest</span></h1>
        </Link>
        <div className='flex gap-3'>
          {
            navOptions.map((nav) => (
              <NavLink key={nav.url} to={nav.url} className={({isActive}) => `text-sm ${isActive ? 'text-orange' : 'text-blue'}`} >
                  {nav.title}
              </NavLink>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Header;