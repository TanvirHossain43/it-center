import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const JobField = ({ job }) => {
    const { image, category, jobs } = job
    return (
        <div>
            <div className='bg-gray-300 w-48 rounded-lg p-3 ' >
                <div className='w-12 h-12'>
                    <img className='w-12 rounded-2xl' src={image} alt="" />
                </div>
                <h3 className='text-xl font-bold'>{category}</h3>
                <p>{jobs} jobs available</p>
            </div>

        </div>
    );
};

export default JobField;