import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../../components/Doctors/Doctors';

const Home = () => {
    const doctorData = useLoaderData();

    return (
        <div className='bg-gray-100'>
            <Banner></Banner>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <Doctors doctorData={doctorData}></Doctors>
            </Suspense>
        </div>
    );
};

export default Home;