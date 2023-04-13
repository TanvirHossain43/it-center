import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import JobField from '../JobField/JobField';


const JobCategory = () => {
    const jobCategory =useLoaderData()
    
    return (
        <div className='my-16' >
            
            <h2 className='text-3xl  text-center font-bold'>Job Category List</h2>
            <p className=' text-center'>Work with digital systems and innovate new technologies.</p>
            <div className='my-5 grid sm:grid-cols-4 gap-4 w-3/4 mx-auto'>
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