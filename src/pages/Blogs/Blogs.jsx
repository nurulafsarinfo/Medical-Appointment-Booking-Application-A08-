import React from 'react';
import { useLoaderData } from 'react-router';

const Blogs = () => {
    const questionData = useLoaderData();
    console.log('Question data : ', questionData)
    return (
        <div className='text-black w-11/12 m-auto'>
            <div className='text-center my-8'>
                <h2 className='font-bold text-3xl mb-3'>Blogs</h2>
                <p className='text-gray-600 font-medium'>Lest's explore some basic concept that will make you a good developer</p>
            </div>
            {
                questionData.map((data, index) => {
                    return (
                        <div key={index} className=' rounded-2xl my-5 bg-white py-7 px-5'>
                            <p className='font-medium text-xl'>Q. {data.question}</p>
                            <div className='my-2 py-4 border-y-2 border-dashed border-gray-300'>
                                <p className='font-medium text-lg text-blue-600'>Answer:</p>
                                <p className='font-semibold text-gray-800'>{data.answer}</p>
                            </div>
                            <p className='font-semibold text-gray-500'>Added at: {data.date}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Blogs;