import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../../assets/me.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={myImage} className="max-w-sm rounded-lg shadow-2xl mr-5" alt='' />
                <div className='w-1/2'>
                    <p className="py-2">Hi! There</p>
                    <h1 className="text-3xl font-bold">I am a MERN Stack Developer</h1>
                    <p className="py-2">I am a motivated and dedicated MERN Stack Developer with knowledge both front-end and back-end. Looking for a professional role to start my career as a Web Developer where I will be able to share my acquired knowledge and gain more.</p>
                    <div className='mt-2'>
                        <Link to='/about'><button className="btn btn-outline text-teal-700 font-bold mr-2 mb-2">More About Me</button></Link>
                        <Link to='/portfolio'><button className="btn btn-primary">Portfolio</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;