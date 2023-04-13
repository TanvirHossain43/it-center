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
            <Link to="/feature"></Link>
            <div className='featured-jobs-container'>
                <h2>Featured Jobs</h2>
                <p>The all new jobs circular available here</p>
            </div>
            <div >
                <div className='jobs-container'>
                    {
                        jobs.map(job => <Job
                            key={job.id}
                            job={job}

                        ></Job>)
                    }
                </div>
                <div className='btn'>
                    <button className='btn-see-all'>See All</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;