import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router';

const ErrorLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            {
                navigation.state == "loading" ? 

                <div className='text-black text-4xl flex justify-center items-center w-[100%] h-[60vh]'>
                    <span className="loading loading-ring w-12 h-12"></span>
                    <span className="loading loading-ring w-16 h-16"></span>
                    <span className="loading loading-ring w-12 h-12"></span>
                </div> :
                
                <Outlet/>
            }
        </div>
    );
};

export default ErrorLayout;