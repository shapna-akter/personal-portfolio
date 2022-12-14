import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItem = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/about'>About Me</Link></li>
        <li className='font-semibold'><Link to='/portfolio'>Portfolio</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
        <li className='font-semibold'><Link to='/contact'>Contact</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Portfolio</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://drive.google.com/file/d/1oenRuPKYKc283X9aj8fS99PpRH8Ur541/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <button className='btn btn-sm btn-outline font-bold'>Resume</button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;