import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='bg-white'>
            <div className="navbar  shadow-sm w-11/12 m-auto bg-white text-black">
                <div className="navbar-start">
                    <img className='w-10' src={logo} alt="" />
                    <a className="ml-2 text-xl font-bold">DocTalk</a>
                </div>
                <div className="navbar-center  lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        <NavLink to='/home' className='font-semibold'>Home</NavLink>
                        <NavLink to='/home' className='font-semibold'>Home2</NavLink>
                        <NavLink to='/home' className='font-semibold'>Home3</NavLink>
                        <NavLink to='/home' className='font-semibold'>Home4</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn rounded-full bg-blue-500 border-none">Emargency</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;