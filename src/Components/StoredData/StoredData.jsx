import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const StoredData = ({ job }) => {
    const { companyName, companyLogo, jobTitle, salary, address, jobType, id } = job;

    return (
        <div>

            <div className="border-2 border-indigo-100 rounded-xl  bg-base-100 shadow-xl p-5 pr-14 flex w-3/4 mx-auto justify-between items-center mb-4">
                <div className='flex'>
                    <div className='w-40 h-16 '>
                        <img className='w-32' src={companyLogo} />
                    </div>
                    <div className="">
                        <h2 className=" text-xl font-bold">{jobTitle}</h2>
                        <p>{companyName}</p>
                        <p className='border-solid border-2 border-indigo-600 w-24 text-indigo-600 my-2 rounded-xl font-bold text-center'>{jobType}</p>

                        <span className='mr-2'><FontAwesomeIcon icon={faLocationDot} /></span><span>{address}</span>

                        <span className='ms-6'><FontAwesomeIcon className='mr-2' icon={faDollarSign} />Salary:{salary}</span>


                    </div>
                </div>
                <div className="card-actions mt-4">
                    <Link to={`/viewDetails/${id}`}><button className='btn btn-primary'>View Details </button></Link>
                </div>
            </div>
        </div>
    );
};

export default StoredData;