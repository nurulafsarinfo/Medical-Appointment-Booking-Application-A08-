import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBookedList } from '../../components/Utilities/_bookList';
import Banner from '../../components/Banner/Banner';

const MyBooking = () => {
    const fromStorageBookData = getStoredBookedList();
    const datas = useLoaderData();


    const bookMarkedDoctors = datas.filter(doc => fromStorageBookData.includes(doc.id));

    console.log("filter find id: ", bookMarkedDoctors)



    return (
        <div className='text-black w-11/12  m-auto'>
            <div className='text-center my-16'>
                <p className='text-3xl font-bold'>My Today Appointment</p>
                <p className='my-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>

                
            </div>
            {
                bookMarkedDoctors.map(docInfo => {
                    console.log("doc infooooo: ", docInfo)
                    return (
                        <div className='bg-white my-10 p-5  rounded-2xl shadow-2xs'>
                            <p className='text-2xl font-bold mb-3'>{docInfo.name}</p>
                            <div className='flex justify-between mb-7'>
                                <p className='text-gray-500 font-semibold'>{docInfo.education}</p>
                                <p className='text-gray-500 font-semibold'>Appointment Fee:  {docInfo.fee} Taka + Vat</p>
                            </div>
                            <button className='text-red-500 border w-full font-bold py-1 px-8 rounded-full'>Cancel from Book List</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default MyBooking;








