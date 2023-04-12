import React from 'react';
import { Link } from 'react-router-dom';

const HeaderSecond = () => {
    return (
        <div>
            <Link to="/second"></Link>
            <div className='header-second-section'>
                <div className='header-title'>
                    <h1>Discover Your <br /> Next Career <span className='title-color'> Opportunity</span></h1>
                </div>
                <div>
                    <img src="https://thumbs.dreamstime.com/b/smiling-businessman-office-colleagues-background-smiling-businessman-office-colleagues-background-101628040.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderSecond;