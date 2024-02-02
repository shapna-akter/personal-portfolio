import React from 'react';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Experiences from './Experiences';

const AboutMe = () => {
    return (
        <div>
            <About></About>
            <Skills></Skills>
            <Experiences/>
            <Education></Education>
        </div>
    );
};

export default AboutMe;