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

    const handleFilter = (event) => {
        const value =event.target.value;
        const filterData = jobs.filter(item => item.jobType == value);
        setFilterJobs(filterData)
    }

    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-24'>Applied Jobs</h2>
            <div className='w-3/4 flex justify-end mx-auto mb-3'>
                <select onChange={handleFilter} className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Filter Job</option>
                    <option value="Full-time">Full Time</option>
                    <option value="Remote">Remote</option>
                </select>
            </div>
            {
                filterJobs.length > 0 ? filterJobs?.map(job => <div>
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