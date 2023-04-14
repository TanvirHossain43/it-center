import React, { useEffect, useState } from 'react';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Job from '../Job/Job';
import ViewDetails from '../ViewDetails/ViewDetails';
import StoredData from '../StoredData/StoredData';

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [filterJobs, setFilterJobs] = useState([])
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("details"));
        if (storedData) {
            setJobs(storedData)
            setFilterJobs(storedData)
        }
    }, [])

    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-24'>Applied Jobs</h2>
            {
                filterJobs.length > 0 ? filterJobs ?.map(job =><div> 
                <StoredData job={job}></StoredData>
                </div>
                 ) 
                 :
                 <h1 className='text-4xl text-center font-extrabold text-orange-700'>No Application found!!!</h1>
        }

        </div>
    );
};

export default AppliedJobs;