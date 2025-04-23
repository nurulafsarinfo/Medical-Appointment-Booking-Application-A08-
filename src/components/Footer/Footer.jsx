import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaGithub, FaTwitter, FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-white text-black py-16'>
            <div className="flex items-center">
                <img className='w-10' src={logo} alt="" />
                <a className="ml-2 text-2xl font-bold">DocTalk</a>
            </div>
            <ul className="flex justify-center gap-6 my-5">
                <NavLink to='/home' className='font-semibold  py-2 w-26 text-center'>Home</NavLink>
                <NavLink to='/my-booking-data' className='font-semibold py-2 w-26 text-center'>Bookings</NavLink>
                <NavLink to='/blogs' className='font-semibold py-2 w-26 text-center'>Blogs</NavLink>
                <NavLink to='/contact' className='font-semibold py-2 w-26 text-center'>Contact</NavLink>
            </ul>
            <p className='border-gray-400 border-t-2 border-dashed w-9/12 mb-5' ></p>
            <div className='flex gap-6'>
                <a href="https://www.facebook.com/md.nurul.afsar.873095"><FaFacebook size={30} className="text-blue-400"></FaFacebook></a>
                <a href="https://youtube.com"><FaYoutube size={30} className="text-red-500"></FaYoutube></a>
                <a href="https://github.com/nurulafsarinfo/"><FaGithub size={30}></FaGithub></a>
                <a href="https://github.com/nurulafsarinfo/"><FaXTwitter size={30}></FaXTwitter></a>
            </div>

        </div>
    );
};

export default Footer;