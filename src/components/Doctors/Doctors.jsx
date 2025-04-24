import React, { useState } from 'react';
import Doctor from './Doctor';

const Doctors = ({ doctorData  }) => {
     const [open, setOpen] = useState(true);
    const [currentData, setCurrentData] = useState(doctorData.slice(0, 6))

    const handleCard = () =>{
        setCurrentData(doctorData)
    }


    return (
        <div className='my-5 mx-auto  py-10 text-black w-11/12 '>
            <div className='md:px-36'>
                <h1 className='text-3xl font-bold text-center'>Our Best Doctors</h1>
                <p className='text-center my-7'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-2 mx-auto shadow-xl py-10 px-3'>
                {
                    currentData.map((doctor, index) => <Doctor key={index} doctorinfo={doctor}></Doctor>)
                }
            </div>
            {
                open ?
            <button onClick={()=> {handleCard(), setOpen(false)}} className='bg-blue-500  text-white font-bold text-2xl text-center py-2 hover:bg-blue-700  rounded-full w-[220px] mx-auto' >Show more</button>: ''
            }
        </div>
    );
};

export default Doctors;