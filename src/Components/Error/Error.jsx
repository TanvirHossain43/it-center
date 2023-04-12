import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons'
import "./Error.css"

const Error = () => {
    return (
        <div className='error'>
            <h2>404 </h2>
            <h3>Not Found <FontAwesomeIcon icon={faCircleExclamation} /></h3>
        </div>
    );
};

export default Error;