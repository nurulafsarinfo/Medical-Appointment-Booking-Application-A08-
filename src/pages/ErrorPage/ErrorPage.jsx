import React from 'react';
import errorImg from "../../assets/error-404-page.jpg";

const ErrorPage = () => {
    return (
        <div className=' text-center w-[100vw] h-[100vh] bg-white text-black mb-20'>
            <img className='h-[78vh] w-[100vw] m-wuto' src={errorImg} alt="" />
            <h1 className='text-6xl font-extrabold'>Sorry!</h1>
            <h3 className='text-3xl mt-6'>Page not Found.</h3>
        </div>
    );
};

export default ErrorPage;