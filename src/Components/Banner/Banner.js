import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../../assets/me3.png'

const Banner = () => {
    return (
        <div className="hero" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <div className="hero-content flex-col lg:flex-row lg:px-12">
                <img src={myImage} className="rounded-full lg:w-2/5 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-2xl lg:text-5xl font-bold pt-6 lg:pt-0">I am a <span className='text-amber-600'>Frontend</span> Developer</h1>
                    <p className="py-6 text-justify">I am a Frontend Developer about 2 years of experience. I'm comfortable working with React.js and proficient in Tailwind CSS. Additionally, I'm familiar with Next.js and Redux. I'm committed to crafting dynamic and user-friendly web experiences.</p>
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