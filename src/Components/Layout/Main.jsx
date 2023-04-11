import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <JobCategory></JobCategory>
        </div>
    );
};

export default Main;