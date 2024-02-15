import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex justify-between items-center bg-red text-white p-4'>
      <h1 className='text-lg flex items-center'>
        <FaCartShopping className='icon mr-2' />
        REACT SHOPPING CART
      </h1>
      <div className='flex space-x-4'>
        <h5 className='text-[18px] '>
          <NavLink to={'/'} className='NavLink'>Home</NavLink>
        </h5>
        <h5 className='text-[18px] '>
          <NavLink to={'/Cart'} className='NavLink'>Cart</NavLink>
        </h5>
      </div>
    </div>
  );
};

export default NavBar;
