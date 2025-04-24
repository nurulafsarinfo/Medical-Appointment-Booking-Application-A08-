import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../../components/Doctors/Doctors';
import Success from '../../components/Success/Success';

const Home = () => {
    const doctorData = useLoaderData();

    return (
        <div className='bg-gray-100'>
            <Banner></Banner>
            <Suspense fallback={<span className="loading loading-bars loading-2xl"></span>}>
                <Doctors doctorData={doctorData}></Doctors>
                <Success></Success>
            </Suspense>
        </div>
    );
};

export default Home;