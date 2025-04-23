import React from 'react';
import { Link } from 'react-router';

const EmptyBooking = () => {
    return (
        <div className='text-black text-center bg-white py-20 my-20 rounded-2xl'>
            <p className='text-3xl font-bold'>You Have not Booked any appointment yet!</p>
            <p className='mt-5'>Our platform commects you with verified, experienced doctors across various specialities -- all ar your conveinience.</p>
            <Link to={'/home'}>
                <button className='bg-blue-600 text-2xl font-semibold text-white px-10 py-1 rounded-full mt-8'>Book an Appointment</button>
            </Link>
        </div>
    );
};

export default EmptyBooking;