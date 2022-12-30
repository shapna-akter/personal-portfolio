import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../../assets/me.jpg'

const Banner = () => {
    return (
        <div className="hero" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <div className="hero-content flex-col lg:flex-row">
                <img src={myImage} className="rounded-lg lg:w-2/5 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-2xl lg:text-5xl font-bold pt-6 lg:pt-0">I am a <span className='text-amber-600'>MERN</span> Stack Developer</h1>
                    <p className="py-6">I am a motivated and dedicated MERN Stack Developer with knowledge both front-end and back-end. Looking for a professional role to start my career as a Web Developer where I will be able to share my acquired knowledge and gain more.</p>
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