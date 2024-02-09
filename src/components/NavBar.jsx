import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className='Navbar'>
      <h1><FaCartShopping className='icon'/>REACT SHOPPING CART</h1>
      <div className='route'>
      <div><NavLink to={'/'} className='NavLink'>Home</NavLink></div>
      <div><NavLink to={'/Cart'} className='NavLink'>Cart</NavLink></div>
      </div>
    </div>
  
  )
}

export default NavBar
