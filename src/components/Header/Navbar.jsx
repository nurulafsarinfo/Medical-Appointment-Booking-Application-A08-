import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';
import '../../index.css'

const Navbar = () => {
    return (
        <nav className='bg-gray-100 '>
            <div className="navbar w-full shadow-sm  m-auto bg-gray-100 text-black px-15">
                <div className="navbar-start">
                    <img className='w-10' src={logo} alt="" />
                    <a className="ml-2 text-xl font-bold">DocTalk</a>
                </div>
                <div className="navbar-center  lg:flex">
                    <ul className="flex justify-center my-5">
                        <NavLink to='/home' className='font-semibold  py-2 w-26 text-center'>Home</NavLink>
                        <NavLink to='/my-booking-data' className='font-semibold py-2 w-26 text-center'>Bookings</NavLink>
                        <NavLink to='/blogs' className='font-semibold py-2 w-26 text-center'>Blogs</NavLink>
                        <NavLink to='/contact' className='font-semibold py-2 w-26 text-center'>Contact</NavLink>
                    </ul>
                
                </div>
                <div className="navbar-end">
                    <a className="btn rounded-full bg-blue-500 border-none">Emargency</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;