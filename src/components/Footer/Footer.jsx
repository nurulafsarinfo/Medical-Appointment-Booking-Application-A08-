import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-white text-black py-16'>
            <div className="flex items-center">
                <img className='w-10' src={logo} alt="" />
                <a className="ml-2 text-2xl font-bold">DocTalk</a>
            </div>
            <ul className="menu menu-horizontal px-1 gap-6 mb-6">
                <NavLink to='/home' className='font-semibold'>Home</NavLink>
                <NavLink to='/home' className='font-semibold'>Home2</NavLink>
                <NavLink to='/home' className='font-semibold'>Home3</NavLink>
                <NavLink to='/home' className='font-semibold'>Home4</NavLink>
            </ul>
            <p className='border-gray-500 border-t-2 border-dashed w-9/12 mb-5' ></p>
            <div className='flex gap-6'>
                <a href="https://www.facebook.com/md.nurul.afsar.873095"><FaFacebook size={30} className="text-blue-400"></FaFacebook></a>
                <a href="https://youtube.com"><FaYoutube size={30} className="text-red-500"></FaYoutube></a>
                <a href="https://github.com/nurulafsarinfo/"><FaGithub size={30}></FaGithub></a>
            </div>

        </div>
    );
};

export default Footer;