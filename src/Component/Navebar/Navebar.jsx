import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navebar() {
  return <>
  <div className='relative'> 
    <div className='bg-slate-700 text-white p-7 fixed right-0 left-0 top-0 z-50'>
    <div className='container w-10/12 mx-auto flex justify-between items-center'>
      <div className='navbar-brand'>
        <Link to='/' className='text-3xl font-bold'>  START FRAMEWORK </Link>
      </div>
      <div className='links'>
          <ul className='flex gap-5'>
            <li> 
              <NavLink to="/about" className=' text-xl font-bold  '>ABOUT </NavLink>
            </li>
            <li> 
              <NavLink  to="/portfolio" className='text-xl font-bold  '>PORTFOLIO </NavLink>
            </li>
            <li> 
              <NavLink to='/contact' className='text-xl font-bold '>CONTACT</NavLink>
            </li>
          </ul>
      </div>

    </div>

    </div>
  </div>
  </>
    
}
