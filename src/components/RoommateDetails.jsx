import React from 'react';
import { FaMobileAlt, FaPaw, FaUser } from 'react-icons/fa';
import { FaIndianRupeeSign, FaPerson } from 'react-icons/fa6';
import { IoLocation } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { TbFileDescription } from 'react-icons/tb';
import { useLoaderData } from 'react-router';

const RoommateDetails = () => {
    const roommateDetails = useLoaderData()
    console.log(roommateDetails);
    const { title, description, availability, location, roomType, lifestyle, contactInfo, rentAmount, userEmail, userName } = roommateDetails;
    // console.log(userEmail);
    return (
        <div className="min-h-screen bg-gray-200 flex justify-center items-center ">
            <div className="text-black bg-white  w-2xl p-12 rounded-2xl">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl text-center font-bold text-primary">{title}</h1>
                    <p className='bg-green-200 py-1 px-3 rounded-2xl'>{availability}</p>
                </div>
                <hr className='my-8 border-gray-300' />

                <div className="md:flex justify-between ">
                    <div className="*:flex *:items-center *:gap-2 space-y-4 text-xl">
                        <p className=""> <IoLocation className='text-primary' /> {location}</p>
                        <p className=""> <FaPerson className='text-primary' /> {roomType}</p>
                        <p className=""> <FaPaw className='text-primary' /> {lifestyle}</p>
                        <p className="mb-6 md:mb-0"> <FaMobileAlt className='text-primary' /> {contactInfo}</p>
                    </div>

                    <div className="*:flex *:items-center *:gap-2 space-y-4 text-xl">
                        <p className=""> <FaIndianRupeeSign className='text-primary' /> {rentAmount}</p>
                        <p className=""> <FaUser className='text-primary' /> {userName}</p>
                        <p className=""> <MdEmail className='text-primary' /> {userEmail}</p>
                        <p className=""> <TbFileDescription className='text-primary' /> {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoommateDetails;