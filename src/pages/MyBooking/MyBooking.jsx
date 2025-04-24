import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBookedList, removeBookList } from '../../components/Utilities/_bookList';
import EmptyBooking from '../../components/EmptyBooking/EmptyBooking';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';


const MyBooking = () => {
    const fromStorageBookData = getStoredBookedList();
    const datas = useLoaderData();

    const bookMarkedDoctors = datas.filter(doc => fromStorageBookData.includes(doc.id));
    const [data, setData] = useState(bookMarkedDoctors);



    const handleRemove = (id) => {
        removeBookList(id);
        setData(getStoredBookedList())
    }

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
              ${x + width / 2}, ${y}
              C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
              Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        console.log("pooooop is: ", props)

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };



    return(

    <div className='text-black w-11/12  m-auto'>

        {
            (data.length < 1) ?
                <EmptyBooking></EmptyBooking> :
                <div className='w-full flex justify-center'>
                    <BarChart
                        width={1100}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="name" />
                        <YAxis dataKey="fee" />

                        <Bar dataKey="fee" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>


        }

        
            <div className='text-center my-16'>
                <p className='text-3xl font-bold'>My Today Appointment</p>
                <p className='my-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>
        { 
            data.map((docInfo, i) => {
                console.log("doc infooooo: ", docInfo)
                return (
                    <div key={i} className='bg-white my-10 p-5  rounded-2xl shadow-2xs'>
                        <p className='text-2xl font-bold mb-3'>{docInfo.name}</p>
                        <div className='flex justify-between mb-7'>
                            <p className='text-gray-500 font-semibold'>{docInfo.education}</p>
                            <p className='text-gray-500 font-semibold'>Appointment Fee:  {docInfo.fee} Taka + Vat</p>
                        </div>
                        <button onClick={() => handleRemove(docInfo.id)} className='text-red-500 border w-full font-bold py-1 px-8 rounded-full'>Cancel from Book List</button>
                    </div>
                )
            })
        
        }
    </div>
        );
};


export default MyBooking;








