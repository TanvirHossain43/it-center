import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';


const ViewDetails = () => {
    // const loadDetails = useLoaderData()
    // console.log(loadDetails)
    



    return (
        <div>
            <h2>Job Details:</h2>
            <div>
                <JobDetails></JobDetails>
            </div>
        </div>
    );
};

export default ViewDetails;