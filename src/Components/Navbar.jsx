import React from 'react'
import { Link } from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div>
       <div className='navbar-logo'>
         <Link to='/Homepage'>
           <img src={Logo} alt='Logo'/>
         </Link>
          <p className='font-mate text-[17px] font-normal text-[#3A8DDE] w-88 h-38'> HEALTH CONNECT </p>
       </div>
    </div>
  )
}

export default Navbar
