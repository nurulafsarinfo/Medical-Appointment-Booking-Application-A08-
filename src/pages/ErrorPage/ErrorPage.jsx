import React from 'react';
import errorImg from "../../assets/error-404-page.jpg";
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className=' text-center w-[100vw] h-[100vh]  bg-amber-300 text-black mb-20'>
            <img className='h-[70vh] w-[100vw] m-wuto' src={errorImg} alt="" />
            <h1 className='text-6xl font-extrabold'>Sorry!</h1>
            <h3 className='text-3xl my-6'>Page not Found.</h3>
            <Link to={'/home'}>
                <button className='bg-blue-600 px-10 py-1 rounded-full text-white text-xl'>
                    Back to Homepage
                </button>
            </Link> 
            
        </div>
    );
};

export default ErrorPage;