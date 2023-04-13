import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import JobField from '../JobField/JobField';


const JobCategory = () => {
    const jobCategory =useLoaderData()
    
    return (
        <div className='job-category-container-main' >
            
            <h2 className='job-category-title'>Job Category List</h2>
            <p className='job-category-title'>Work with digital systems and innovate new technologies.</p>
            <div className='job-category-container'>
                {
                    jobCategory.map(job => <JobField
                    job={job}
                    ></JobField>)
                }
            </div>
        </div>
    );
};

export default JobCategory;