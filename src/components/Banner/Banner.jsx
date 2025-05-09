import React from 'react';
import bannerImg from '../../assets/banner-img-1.png';
import bannerImg2 from '../../assets/bannerDoctor.jpg';


const Banner = () => {

    return (
        <div>
             <div className=' flex flex-col items-center justify-center py-10  text-black bg-gradient-to-r from-blue-100 to-purple-100 w-11/12 m-auto border-2 border-white rounded-2xl'>
                <div className='px-30 flex flex-col items-center text-center mb-12'>
                    <h1 className='text-5xl font-bold'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
                    <br />
                    <p className='font-semibold'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>

                <div className='flex gap-4 text-center mb-10'> 
                    <input className='border md:w-[400px] w-[200px] rounded-full px-7' type="text" placeholder='Search any doctor...' />
                    <button className='md:text-2xl text-lg text-white font-semibold px-6 py-2 rounded-full bg-blue-600'>Search Now</button>
                </div>

                <div className='md:flex gap-3 w-full  justify-center items-center'>
                    <img  src={bannerImg2} alt="" className='lg:w-[500px] md:w-[400px]  rounded-2xl md:mb-0 mb-5' />
                    <img src={bannerImg} alt="" className='lg:w-[500px] md:w-[400px]'/>
                </div>
            </div>
        </div>
    );
};

export default Banner;