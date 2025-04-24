import React from 'react';
import CountUp from 'react-countup';
import totalDoc from '../../assets/success-doctor.png'
import star from '../../assets/success-review.png'
import parients from '../../assets/success-patients.png'
import stuff from '../../assets/success-staffs.png'

const Success = () => {
    return (
        <div className=' text-center text-black my-16'>
            <div>
                <p className='text-3xl font-bold mb-4'>We Provide Best Medical Services</p>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>

                <div className="flex flex-wrap gap-5 justify-center items-center mt-16 lg:mx-40 md:mx-20 border">
                    <div>
                        <div className='w-50 h-48  flex flex-col items-start p-5 border-2 shadow-2xl border-blue-300 bg-white rounded-2xl gap-3'>
                            <img className='w-16 ' src={totalDoc} alt="" />
                            <CountUp className='text-3xl font-bold'
                                start={5}
                                end={182}
                                duration={8}
                                suffix="+"
                                decimal=","
                            >
                            </CountUp>
                            <p className='font-medium text-gray-600'>Total Doctors</p>

                        </div>
                    </div>
                    <div>
                        <div className='w-50 h-48 border-2 border-blue-300 flex flex-col items-start p-5 bg-white shadow-2xl rounded-2xl gap-3'>
                            <img className='w-16 ' src={star} alt="" />
                            <CountUp className='text-3xl font-bold'
                                start={5}
                                end={1875}
                                duration={8}
                                suffix="+"
                                decimal=","
                            >
                            </CountUp>
                            <p className='font-medium text-gray-600'>Total Reviews</p>

                        </div>
                    </div>
                    <div>
                        <div className='w-50 h-48 border-2 border-blue-300 flex flex-col items-start p-5 bg-white shadow-2xl rounded-2xl gap-3'>
                            <img className='w-16 ' src={parients} alt="" />
                            <CountUp className='text-3xl font-bold'
                                start={5}
                                end={2004}
                                duration={8}
                                suffix="+"
                                decimal=","
                            >
                            </CountUp>
                            <p className='font-medium text-gray-600'>Total Patients</p>

                        </div>
                    </div>
                    <div>
                        <div className='w-50 h-48 border-2 border-blue-300 flex flex-col items-start p-5 bg-white shadow-2xl rounded-2xl gap-3'>
                            <img className='w-16 ' src={stuff} alt="" />
                            <CountUp className='text-3xl font-bold'
                                start={5}
                                end={239}
                                duration={8}
                                suffix="+"
                                decimal=","
                            >
                            </CountUp>
                            <p className='font-medium text-gray-600'>Total Stuffs</p>

                        </div>

                    </div>
                </div>
            </div>
            
            <div className="grid md:grid-cols-4 grid-cols-2 gap-5 justify-center items-center mt-16 lg:mx-40 md:mx-20 border">
                            <div className="h-40 flex items-center justify-center bg-gray-500">Item 1</div>
                            <div className="h-40 flex items-center justify-center bg-gray-600">Item 2</div>
                           
                        </div>
        </div>
    );
};

export default Success;