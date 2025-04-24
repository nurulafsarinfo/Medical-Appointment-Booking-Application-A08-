import React from 'react';
import { Link } from 'react-router';

const Doctor = ({ doctorinfo }) => {

    const { id, name, image, available, experience, registration_number, education } = doctorinfo;

    return (
        <div className='text-black w-96 bg-green-50 rounded-xl' >
            <div className='border rounded-3xl p-8 flex flex-col gap-2'>
                <img src={image} alt="" className='w-90 h-60 rounded-3xl mb-5' />
                <div>
                    <button className={`${available ? 'text-green-500' : 'text-red-500 border-red-300 text-[13px]'} border border-green-300 rounded-full px-6 py-1 bg-green-100 font-semibold`}>{available ? 'Available' : 'Unavailable'}</button>
                    <button className='border rounded-full px-4 py-1 ml-3 border-blue-300 bg-blue-100 text-blue-600'> {experience} </button>
                </div>
                <h2 className='text-2xl font-semibold'>{name}</h2>
                <p className='text-gray-600 text-sm mb-2'>{education}</p>
                <p className='border-t border-gray-300 border-dashed'></p>
                <p className='text-gray-600 text-sm'> Reg No: {registration_number}</p>

                <Link to={`/doctorDetails/${id}`}>
                    <button className='border border-blue-500  rounded-full  w-full  py-2 text-xl text-blue-600 font-bold mt-5'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Doctor;