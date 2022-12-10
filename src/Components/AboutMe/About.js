import React from 'react';
import myImage from '../../assets/me3.png'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={myImage} className="max-w-sm rounded-lg shadow-2xl" alt='' />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-0 font-semibold'>
                    <p><span className='text-gray-600'>Name :</span> Shapna Akter</p>
                    <p><span className='text-gray-600'>Email:</span> shapna.akter0622@gmail.com</p>
                    <p><span className='text-gray-600'>Nationality:</span> Bangladeshi</p>
                    <p><span className='text-gray-600'>Language:</span> Bengali</p>
                    <p><span className='text-gray-600'>Experience:</span> 1year</p>
                    <p><span className='text-gray-600'>Location:</span> Dhaka, Bangladesh</p>
                    <a href="https://drive.google.com/file/d/1jEndtHLyXF79ekU6edQq0UQX9NRrZWbT/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button className='btn btn-success font-bold mt-6'>Download CV</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;