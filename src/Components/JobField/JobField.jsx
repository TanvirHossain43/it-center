import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './JobField.css'

const JobField = ({ job }) => {
    const { image, category, jobs } = job
    return (
        <div>
            <div className='job-category'>

                <div>
                    <div className='job-category-icon'>
                        <img src={image} alt="" />
                    </div>
                    <h3>{category}</h3>
                    <p>{jobs} jobs available</p>
                </div>
            </div>
        </div>
    );
};

export default JobField;