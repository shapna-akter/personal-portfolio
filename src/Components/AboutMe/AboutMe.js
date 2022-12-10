import React from 'react';
import About from './About';
import Education from './Education';
import Skills from './Skills';

const AboutMe = () => {
    return (
        <div>
            <h1 className='text-5xl text-center font-bold my-12'>About <span className='text-amber-600'>Me</span></h1>
            <About></About>
            <Skills></Skills>
            <Education></Education>
        </div>
    );
};

export default AboutMe;