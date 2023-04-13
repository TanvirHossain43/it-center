import React from 'react';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import HeaderSecond from '../Header/HeaderSecond';

const Main = () => {
    return (
        <div>
            <HeaderSecond></HeaderSecond>
             <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Main;