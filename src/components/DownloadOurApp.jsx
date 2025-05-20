
import React from 'react';
import { FaApple } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { Link } from 'react-router';
import downloadApp from '../assets/downloadApp.png';

const DownloadOurApp = () => {
    return (
        <div className='bg-base-300 max-w-9/12 mx-auto flex items-center justify-between px-12  rounded-3xl my-14'>
            <div className="">
                <h1 className="text-2xl font-semibold mb-8 leading-12">
                    Download Our Mobile App <br /> <span className='text-secondary'>20% Off</span>
                </h1>

                <div className="flex gap-4">

                    <div className=" px-6 border rounded-4xl flex gap-2 items-center py-1 cursor-pointer">
                        <div className="">
                            <FaApple className='text-2xl' />
                        </div>
                        <div className="">
                            <p className='text-xs'><small>Get in on</small></p>
                            <p className='font-bold text-sm'>Apps store</p>
                        </div>
                    </div>
                    <div className=" px-6 border rounded-4xl flex gap-3 items-center py-1 bg-primary cursor-pointer">
                        <div className="">
                            <IoLogoGooglePlaystore className='text-2xl' />

                        </div>
                        <div className="">
                            <p className='text-xs'><small>Get in on</small></p>
                            <p className='font-bold'>Google Play</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className="w-md">
                <img src={downloadApp} alt="" className='' />
            </div>
        </div>
    );
};

export default DownloadOurApp;