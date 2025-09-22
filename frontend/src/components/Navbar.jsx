import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import Essencelogo from '../assets/Essencelogo.png'
const Navbar = () => {

    const [visible,setVisible] = useState(false);

    const {setShowSearch , getCartCount , navigate, token, setToken, setCartItems} = useContext(ShopContext);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

  return (
    <div className='sticky top-0 z-50 bg-white flex items-center justify-between py-1 font-medium'>
      
      <Link to='/'>
  <img src={Essencelogo} className='w-20' alt="Essence Logo" />
</Link>


  <ul className="hidden sm:flex items-center justify-center gap-8 text-sm text-gray-700">
  <NavLink
    to="/"
    className="flex flex-col items-center gap-1 group"
  >
    <p className="transition-colors duration-200 group-hover:text-gray-900">HOME</p>
    <hr className="w-1/2 border-none h-[2px] bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
  </NavLink>

  <NavLink
    to="/collection"
    className="flex flex-col items-center gap-1 group"
  >
    <p className="transition-colors duration-200 group-hover:text-gray-900">NEW ARRIVALS</p>
    <hr className="w-1/2 border-none h-[2px] bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
  </NavLink>

  <NavLink
    to="/collection"
    className="flex flex-col items-center  text-2xl "
  >
    <span>ESSENCE </span><span >COUTURE</span>
  </NavLink>

  <NavLink
    to="/collection"
    className="flex flex-col items-center gap-1 group"
  >
    <p className="transition-colors duration-200 group-hover:text-gray-900">COLLECTION</p>
    <hr className="w-1/2 border-none h-[2px] bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
  </NavLink>

  <NavLink
    to="/about"
    className="flex flex-col items-center gap-1 group"
  >
    <p className="transition-colors duration-200 group-hover:text-gray-900">ABOUT</p>
    <hr className="w-1/2 border-none h-[2px] bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
  </NavLink>

  <NavLink
    to="/contact"
    className="flex flex-col items-center gap-1 group"
  >
    <p className="transition-colors duration-200 group-hover:text-gray-900">CONTACT</p>
    <hr className="w-1/2 border-none h-[2px] bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
  </NavLink>
</ul>


      <div className='flex items-center gap-6'>
            <img onClick={()=> { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            
            <div className='group relative'>
                <img onClick={()=> token ? null : navigate('/login') } className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                {/* Dropdown Menu */}
                {token && 
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                        <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>}
            </div> 
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link> 
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" /> 
      </div>

        {/* Sidebar menu for small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>NEW ARRIVALS</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>ESSENCE COUTURE</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT US</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
        </div>

    </div>
  )
}

export default Navbar
