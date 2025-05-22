import React from 'react';
import { Link, useLoaderData } from 'react-router';
import BrowseListingDetails from './BrowseListingDetails';

const BrowseListing = () => {

    const allRoommates = useLoaderData()
    // console.log(allRoommates);



    return (

        <div className="bg-gray-300 min-h-screen ">
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 py-12'>
                {allRoommates.map(singleRoommate => <BrowseListingDetails singleRoommate={singleRoommate}></BrowseListingDetails>)}
            </div>
        </div>



    );
};

export default BrowseListing;