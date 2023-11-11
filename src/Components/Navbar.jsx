import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from './Navigation'

export default function Navbar() {
  return (
    <div className='font-regu font-semibold w-[100%] m-auto bg-green py-3 pt-9'>
      {/* For Computer */}
      <div className='hidden lg:block lg:flex lg:justify-between lg:items-center lg:mt-9 w-[80%] m-auto bg-[white] p-3'>
        <div className='text-3xl text-green font-cairo flex-start'>قنينتي</div>

        <div className='flex justify-evenly w-[55%] text-xl font-normal'>
          <NavLink className="border-b-2 border-green text-[green]" to="/" >الرئيسية</NavLink>
          <NavLink className="border-b-2 border-[white] hover:text-green hover:border-green focus:border-green focus:text-green transition ease-out duration-500" to="/features">المميزات</NavLink>
          <NavLink className="border-b-2 border-[white] hover:text-green hover:border-green focus:border-green focus:text-green transition ease-out duration-500" to="/services">خدماتنا</NavLink>
          <NavLink className="border-b-2 border-[white] hover:text-green hover:border-green focus:border-green focus:text-green transition ease-out duration-500" to="/market">المتجر</NavLink>
          <NavLink className="border-b-2 border-[white] hover:text-green hover:border-green focus:border-green focus:text-green transition ease-out duration-500" to="/contact">تواصل معنا</NavLink>
        </div>

        <div className='text-lg text-[#ffffff] bg-green p-2 rounded cursor-pointer font-normal hover:bg-[#333] transition ease-out duration-500'>تحميل التطبيق</div>
      </div>

      {/* For Mobile */}
      <div className='lg:hidden border-b p-3 flex justify-between items-center bg-[white]'>
        <div className='text-3xl text-green font-cairo'>قنينتي</div>        
        <Navigation />
      </div>
    </div>
  )
}
