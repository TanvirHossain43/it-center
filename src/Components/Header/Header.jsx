import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            {/* duisy */}
            <div className="navbar bg-base-100 sm:w-3/4 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            <Link to="/">Home</Link>
                            <Link to="/statistics">Statistics</Link>
                            <Link to="/jobs">Applied Jobs</Link>
                            <Link to="/blogs">Blogs</Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl">IT Center</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-7 text-2xl">
                        <Link to="/">Home</Link>
                        <Link to="/statistics">Statistics</Link>
                        <Link to="/jobs">Applied Jobs</Link>
                        <Link to="/blogs">Blogs</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Start Applying</a>
                </div>
            </div>

        </div>
    );
};

export default Header;