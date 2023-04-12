import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import AppliedJobs from '../AppliedJobs/AppliedJobs';
import JobCategory from '../JobCategory/JobCategory'
import HeaderSecond from '../Header/HeaderSecond';

const Home = () => {
    return (
        <div>
            <Header></Header>
            {/* <HeaderSecond></HeaderSecond> */}
            

            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
            <Outlet></Outlet>

        </div>
    );
};

export default Home;