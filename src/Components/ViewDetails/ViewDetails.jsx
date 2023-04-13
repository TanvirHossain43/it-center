import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './ViewDetails.css'




const ViewDetails = () => {
    const job = useLoaderData()
    // console.log(loadDetails)




    return (
        <div>
            <div>
                <h2>Job Details</h2>
            </div>
            <div className='details-container'>
                <div className='details-left'>
                    <div>
                        <span>Job Description:</span><span>{job.jobDescription}</span>
                    </div>
                    <div>
                        <span>Job Responsibility:</span><span>{job.jobResponsibility}</span>
                    </div>
                    <div>
                        <h4>Educational Requirement</h4>
                        <span>{job.educationalRequirement}</span>
                    </div>
                    <div>
                        <h4>Experience</h4>
                        <span>{job.experience}</span>
                    </div>
                </div>


                <div className='details-right'>
                    <div>
                        <h3>Job Details</h3>
                        <div>
                            <span>Salary:</span><span></span> <br />
                            <span>Job Title:</span><span></span>
                        </div>
                        <h3>Contact Information</h3>
                        <div>
                            <span>phone:</span><span></span> <br />
                            <span>Email:</span><span></span> <br />
                            <span>Address:</span><span></span>
                        </div>
                    </div>
                    <div>
                        <button className='btn-apply-now'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;