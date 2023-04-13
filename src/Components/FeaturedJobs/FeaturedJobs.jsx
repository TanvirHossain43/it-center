import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

import { Link } from 'react-router-dom';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('/job.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            {/* <Link to="/feature"></Link> */}
            <div className='mt-6' >
                <h2 className='text-3xl font-bold text-center'>Featured Jobs</h2>
                <p className='text-center'>The all new jobs circular available here</p>
            </div>
            <div >
                <div className=' sm:w-3/4 mx-auto gap-y-4 grid sm:grid-cols-2 justify-items-center mt-5'>
                    {
                        jobs.map(job => <Job
                            key={job.id}
                            job={job}

                        ></Job>)
                    }
                </div>
                <div className=''>
                    <button className='btn btn-primary'>See All</button>
                </div>
            </div>

           
        </div>
    );
};

export default FeaturedJobs;