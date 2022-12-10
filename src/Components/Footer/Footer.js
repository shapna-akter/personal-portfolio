import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <Link to='/about' className="link link-hover">About Me</Link>
                <Link to='portfolio' className="link link-hover">Portfolio</Link>
                <Link to='/contact' className="link link-hover">Contact</Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <Link>
                        <FaGithub className='text-4xl'></FaGithub>
                    </Link>
                    <Link>
                        <FaFacebook className='text-4xl'></FaFacebook>
                    </Link>
                    <Link>
                        <FaLinkedin className='text-4xl'></FaLinkedin>
                    </Link>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by Shapna Akter</p>
            </div>
        </footer>
    );
};

export default Footer;