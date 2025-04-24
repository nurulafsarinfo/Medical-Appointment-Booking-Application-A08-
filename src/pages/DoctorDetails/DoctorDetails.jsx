import React, { useEffect, useState } from 'react';
import reg from '../../assets/fi_9394452.png';
import { useLoaderData, useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { PiWarningOctagonThin } from "react-icons/pi";
import { addToBookList, getStoredBookedList } from '../../components/Utilities/_bookList';



const DoctorDetails = () => {
    const allId = useParams();
    const docId = parseInt(allId.id);
    const doctorData = useLoaderData();
    // const [doctorData, setDoctorData] = useState([])

    // console.log("daoctor dtaa ", doctorData)
    // useEffect(() => {
    //     fetch("/doctorInfo.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             setDoctorData(data);

    //         })
    // },[])

    const docInfo = doctorData.find(doctr => doctr.id === docId);
    console.log("docINfo: ", docInfo)

    const { name, image, availability, registration_number, workplace, education, fee } = docInfo;
    const navigate = useNavigate();

    const handleStoredData = (docInfo) => {
        const allBookedList = getStoredBookedList();
        console.log("dovvvvvvvv----", docInfo)

        if (!allBookedList.includes(docInfo.id)) {
            navigate('/my-booking-data')
        }
        addToBookList(docInfo);

    }

    return (

        <div className='text-black w-11/12 mx-auto my-5 '>
            <div className='text-center rounded-2xl bg-white p-6'>
                <p className='text-3xl font-semibold mb-5 '>Doctor’s Profile Details</p>
                <p>We are providing Experienced doctors. Who are very inteligence and Caring. Each doctor have machive foreign degree. They are very <br /> pleasue person.We suggest your needed things. Thank You.</p>
            </div>
            <div className='flex items-center gap-6 rounded-2xl bg-white mt-10 p-10'>
                <img src={image} alt="Doctor_image" className='border border-blue-300 rounded-2xl w-90 shadow-2xl' />
                <div>
                    <p className='font-bold text-3xl '>{name}</p>
                    <p className='text-gray-600 my-2'>{education}</p>
                    <p className='text-gray-600 mt-3'>Working at </p>
                    <p className='text-lg font-bold mb-4'>{workplace}</p>
                    <p className='text-gray-600 m flex gap-2  border-dashed border-y border-gray-300  py-3 '><img src={reg} alt="" />Rag No: {registration_number}</p>
                    <div className='flex gap-3 mt-10'>
                        <p className='text-xl font-semiBold'>Availability</p>
                        {
                            availability.map((day, index) => <span key={index} className='ml-3 bg-amber-100 text-amber-600 border rounded-full px-4 py-1'>{day}</span>)
                        }
                    </div>
                    <div className='flex gap-2 my-10'>
                        <p className='font-bold '>Consutation Fee: </p>
                        <p className='font-bold text-blue-600'>Taka: {fee}</p>
                        <p className='text-gray-500'>(inc vat)</p>
                        <p className='font-seniBold text-blue-600'>Per consultation</p>
                    </div>
                </div>

            </div>

            <div className='bg-white rounded-2xl p-10 my-10'>
                <h2 className='font-bold text-3xl text-center mb-5'>Book an Appointment</h2>
                <div className='flex justify-between border-y-2 py-4 border-dashed border-gray-300'>
                    <p className='font-semibold text-xl'>Availability</p>
                    <button className='text-green-700 font-bold bg-teal-100 rounded-full border-2 border-teal-200 px-5 py-1 '>Doctor Available Today</button>
                </div>
                <p className='text-amber-500 flex items-center my-5'> <PiWarningOctagonThin size={35} /> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
            </div>

            <button onClick={() => handleStoredData(docInfo)} className='text-xl font-semibold bg-blue-600 rounded-full text-white py-1 w-full mb-4'>Book Appointment Now</button>


        </div>
    );
};

export default DoctorDetails;