import React from 'react';
import Banner from '../components/Banner';
import DownloadOurApp from '../components/DownloadOurApp';
import TeamCarousel from '../components/TeamMembers';

const Home = () => {
    return (
        <div>
            <Banner />
            <DownloadOurApp />
            {/* <TeamCarousel /> */}
        </div>
    );
};

export default Home;