import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to ="/">Home</Link>
            <Link to ="/statistics">Statistics</Link>
            <Link to ="/jobs">Applied Jobs</Link>
            <Link to ="/blogs">Blogs</Link>
        </nav>
    );
};

export default Header;