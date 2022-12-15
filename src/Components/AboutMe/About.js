import React from 'react';
import myImage from '../../assets/me3.png'

const About = () => {
    return (
        <div className="hero" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <div className="hero-content flex-col lg:flex-row">
                <img src={myImage} className="rounded-lg lg:w-2/5 shadow-2xl" alt='' />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-0 font-semibold'>
                    <p><span className='text-gray-600'>Name :</span> Shapna Akter</p>
                    <p><span className='text-gray-600'>Email:</span> shapna.akter0622@gmail.com</p>
                    <p><span className='text-gray-600'>Nationality:</span> Bangladeshi</p>
                    <p><span className='text-gray-600'>Language:</span> Bengali</p>
                    <p><span className='text-gray-600'>Experience:</span> 1year</p>
                    <p><span className='text-gray-600'>Location:</span> Dhaka, Bangladesh</p>
                    <a href="https://drive.google.com/file/d/1oenRuPKYKc283X9aj8fS99PpRH8Ur541/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button className='btn btn-success font-bold mt-6'>Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;