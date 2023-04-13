import React from 'react';
import { Link } from 'react-router-dom';

const HeaderSecond = () => {
    return (
        <div>
            {/* <Link to="/"></Link> */}
            

            {/* duisy */}

            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://thumbs.dreamstime.com/b/smiling-businessman-office-colleagues-background-smiling-businessman-office-colleagues-background-101628040.jpg" className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className='text-4xl font-extrabold'>Discover Your  Next Career <span className='text-orange-500'> Opportunity</span></h1>
                        <p className="py-6 text-lg">Once-in-a-lifetime chance to travel the world, meet fascinating people, and document their stories through photography and writing.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSecond;