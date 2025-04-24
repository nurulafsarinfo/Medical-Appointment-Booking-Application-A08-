import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';


const Root = () => {
    const navigation = useNavigation();


    return (
        <div className='bg-gray-100 h-[100%]'>
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
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;