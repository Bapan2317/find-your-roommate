import React from 'react';
import Banner from '../components/Banner';
import DownloadOurApp from '../components/DownloadOurApp';
import TeamCarousel from '../components/TeamMembers';
import RoommatesPost from '../components/RoommatesPost';
import { useLoaderData } from 'react-router';

const Home = () => {
    const roommates = useLoaderData()
    // console.log(roommates);
    return (
        <div>
            <Banner />
            <div className="bg-base-300">
                <div className="w-10/12 mx-auto grid grid-cols-3 gap-12">
                    {
                        roommates.map(roommate => <RoommatesPost
                            key={roommate._id}
                            roommate={roommate}
                        >
                        </RoommatesPost>)
                    }</div>
            </div>
            <DownloadOurApp />
            {/* <TeamCarousel /> */}
            {/* <RoommatesPost roommates={roommates} /> */}
        </div>
    );
};

export default Home;