import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons'


const Error = () => {
    return (
        <div className='w-80 text-center mx-auto mt-52 text-4xl font-extrabold  '>
            <h2 className='text-red-500 text-8xl mb-8'>404 </h2>
            <h3>Not Found <FontAwesomeIcon icon={faCircleExclamation} /></h3>
        </div>
    );
};

export default Error;