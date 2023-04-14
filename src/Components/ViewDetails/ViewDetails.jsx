import React, { useEffect, useState } from 'react';
import { json, useLoaderData, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDollarSign,faCalendarWeek,faLocationDot,faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'





const ViewDetails = () => {
    const job = useLoaderData()

    const handleDetails =() =>{
        const storedData =JSON.parse(localStorage.getItem("details"))
        if(storedData){
            localStorage.setItem("details",JSON.stringify([...storedData,job]))
        }
        else{
            localStorage.setItem("details",JSON.stringify([job]))
        }
    }
    

    return (
        <div className='mt-10 '>
            <div className='text-center font-extrabold text-3xl'>
                <h2>Job Details</h2>
            </div>
            <div className='mt-5 grid sm:grid-cols-2 w-3/4 mx-auto justify-items-center sm:h-96 '>
                <div className='p-6'>
                    <div>
                        <span className='text-lg font-bold'>Job Description:</span><span>{job.jobDescription}</span>
                    </div>
                    <div>
                        <span className='text-lg font-bold'>Job Responsibility:</span><span>{job.jobResponsibility}</span>
                    </div>
                    <div>
                        <h4 className='text-lg font-bold' >Educational Requirement</h4>
                        <span>{job.educationalRequirement}</span>
                    </div>
                    <div>
                        <h4 className='text-lg font-bold'>Experience</h4>
                        <span>{job.experience}</span>
                    </div>
                </div>


                <div className='w-72  '>
                    <div className='bg-slate-100 p-6'>
                        <h3 className='text-lg font-bold'>Job Details</h3>
                        <hr className='border-1 border-slate-400 mt-3 mb-1' />
                        <div>
                            <span className='text-lg font-bold'><FontAwesomeIcon className='mr-1' icon={faDollarSign} />Salary:</span><span>{job.salary}</span> <br />
                            <span className='text-lg font-bold'><FontAwesomeIcon className='mr-1' icon={faCalendarWeek} />Job Title:</span><span>{job.jobTitle}</span>
                        </div>
                        <h3 className='text-lg font-bold mt-2'>Contact Information</h3>
                        <hr className='border-1 border-slate-400 mt-3 mb-1' />
                        <div>
                            <span className='text-lg font-bold'><FontAwesomeIcon className='mr-1' icon={faPhone} />phone:</span><span>{job.phone}</span> <br />
                            <span className='text-lg font-bold'><FontAwesomeIcon className='mr-1' icon={faEnvelope} />Email:</span><span>{job.email}</span> <br />
                            <span className='text-lg font-bold'><FontAwesomeIcon className='mr-1' icon={faLocationDot} />Address:</span><span>{job.address}</span>
                        </div>
                    </div>
                    <div className='w-72 '>
                        <button onClick={handleDetails} className='btn btn-primary w-72  mt-5'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;