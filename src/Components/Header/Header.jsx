import React from 'react';
import { Link, Outlet } from 'react-router-dom';
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
         
        </div>
    );
};

export default Header;