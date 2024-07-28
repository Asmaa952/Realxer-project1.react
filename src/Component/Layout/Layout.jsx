import React from 'react'
import Navebar from '../Navebar/Navebar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function  () {
  return <>
     <Navebar/>
      <div className='counter mx-auto'>
         <Outlet/>
      </div>
     <Footer/>
  </>
   
  
}
