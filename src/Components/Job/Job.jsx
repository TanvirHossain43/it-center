import React from 'react';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import ViewDetails from '../ViewDetails/ViewDetails';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { companyName, companyLogo, jobTitle, salary, address, jobType, id } = job;
    return (
        <div>
            {/* duisy */}

            <div className="card w-96 bg-base-100 shadow-xl p-5 pr-14">
                <figure className='w-40 h-16 '><img className='w-32' src={companyLogo} /></figure>
                <div className="">
                    <h2 className=" text-xl font-bold">{jobTitle}</h2>
                    <p>{companyName}</p>
                    <p className='border-solid border-2 border-indigo-600 w-24 text-indigo-600 my-2 rounded-xl font-bold text-center'>{jobType}</p>

                    <span className='mr-2'><FontAwesomeIcon icon={faLocationDot} /></span><span>{address}</span>

                    <span className='ms-6'><FontAwesomeIcon className='mr-2' icon={faDollarSign} />Salary:{salary}</span>
                     <br />
                    <div className="card-actions mt-4">
                        <Link to={`/viewDetails/${id}`}><button className='btn btn-primary'>View Details </button></Link>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Job;