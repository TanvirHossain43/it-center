import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header-container'>
                <div>
                    <h3>IT Center</h3>
                </div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/jobs">Applied Jobs</Link>
                    <Link to="/blogs">Blogs</Link>
                </nav>
                <div>
                    <button className='btn-apply'>Apply</button>
                </div>
            </div>
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

export default Header;