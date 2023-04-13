import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import AppliedJobs from '../AppliedJobs/AppliedJobs';
import JobCategory from '../JobCategory/JobCategory'
import HeaderSecond from '../Header/HeaderSecond';
import Main from './Main';

const Home = () => {
    return (
        <div>
            <Header></Header>
            {/* <Main></Main> */}
            <Outlet></Outlet>

        </div>
    );
};

export default Home;