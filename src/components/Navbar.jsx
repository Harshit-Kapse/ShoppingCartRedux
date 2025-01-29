import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const cart = useSelector(state => state.cart);

  return (
    <div className='w-full'>
      <nav className='flex justify-between items-center h-20 max-w-6xl min-w-4xl mx-auto'>
        <NavLink to="/">
          <div className='ml-5'>
            <img src="/logo.png" alt="image" className='h-14 w-[180px]' />
          </div>
        </NavLink>

        <div className='flex items-center text-slate-100 mr-5 space-x-6 tracking-wide'>
          <NavLink to="/">
            <p className="text-lg">Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className='relative'>
              <FaShoppingCart size={25} />
              {
                cart.length > 0 && <span
                  className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 p-1 flex justify-center items-center animate-bounce rounded-full text-white'>
                  {cart.length}
                </span>
              }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar