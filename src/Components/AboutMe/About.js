import React from 'react';
// import myImage from '../../assets/me3.png'
import myImage from '../../assets/me2.png'

const About = () => {
    return (
        <div data-aos="fade-up"
            data-aos-duration="1000">
            <h1 className='text-5xl text-center font-bold mt-24 mb-12'>About <span className='text-amber-600'>Me</span></h1>
            <div className="hero-content flex-col lg:flex-row">
                <img src={myImage} className="rounded-lg lg:w-2/5 shadow-2xl" alt='' />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-0 font-semibold'>
                    <p><span className='text-gray-600'>Name :</span> Shapna Akter</p>
                    <p><span className='text-gray-600'>Email:</span> shapna.akter0622@gmail.com</p>
                    <p><span className='text-gray-600'>Nationality:</span> Bangladeshi</p>
                    <p><span className='text-gray-600'>Language:</span> Bengali</p>
                    <p><span className='text-gray-600'>Experience:</span> 1year</p>
                    <p><span className='text-gray-600'>Location:</span> Dhaka, Bangladesh</p>
                    <a href="https://drive.google.com/file/d/10-P23nlLQH7W7W8oTfL9P3v-ZCuxZKRI/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button className='btn bg-[#40ABB0] text-white hover:bg-teal-700 mt-6'>Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;