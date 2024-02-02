import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../../assets/me3.png'

const Banner = () => {
    return (
        <div className="mt-24" data-aos="fade-down"
            data-aos-duration="1000">
            <div className="flex lg:flex-row flex-col items-center gap-12 lg:px-12 px-6">
                <img src={myImage} className="rounded-full lg:w-2/5 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-2xl lg:text-5xl font-bold pt-6 lg:pt-0">I am a <span className='text-amber-600'>Frontend</span> Developer</h1>
                    <p className="py-6 text-justify">Hey there! I'm Shapna Akter, a passionate Frontend Developer based in Dhaka, Bangladesh. Currently shaping digital experiences with Tangle in the USA, I specialize in creating visually appealing websites using Reactjs, TailwindCss, and DaisyUI. My journey includes crafting responsive designs and integrating user authentication features with Firebase. Looking forward to bringing more creativity to the web development realm!</p>
                    <div className='mt-2'>
                        <Link to='/about'><button className="btn bg-white hover:bg-teal-700 hover:text-white text-teal-700 font-bold mr-2 mb-2">More About Me</button></Link>
                        <Link to='/portfolio'><button className="btn bg-[#40ABB0] text-white hover:bg-teal-700">Portfolio</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;