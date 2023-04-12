import React from 'react';
import './Job.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot,faDollarSign} from '@fortawesome/free-solid-svg-icons'
import ViewDetails from '../ViewDetails/ViewDetails';
import { Link } from 'react-router-dom';

const Job = ({job,veiwDetails}) => {
    const {companyName,companyLogo,jobTitle,salary,address,jobType}=job;
    return (
        <div className='job-container'>
            <img src={companyLogo} alt="" />
            <h3>{jobTitle}</h3>
            <p>{companyName}</p>
            <p className='job-type'>{jobType}</p>
            <span><FontAwesomeIcon className='icon' icon={faLocationDot} />{address}</span>
            <span className='salary'><FontAwesomeIcon className='icon' icon={faDollarSign} />Salary:{salary}</span> <br />
            <Link to ="/viewDetails"><button className='btn-details'>View Details </button></Link>
        </div>
    );
};

export default Job;