import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from "./ThemeToggle.jsx";

const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
            <div>
                <Link to="/" className="px-2">Home</Link> | <Link to="/games" className="px-2">Games</Link>
            </div>
            <ThemeToggle />
        </nav>
    );
};


export default NavBar;
