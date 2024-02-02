import React from 'react';
import Banner from '../Banner/Banner';
import About from '../AboutMe/About';
import Contact from '../Contact/Contact';
import Skills from '../AboutMe/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Education from '../AboutMe/Education';
import Experiences from '../AboutMe/Experiences';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Skills/>
            <Portfolio/>
            <About/>
            <Experiences/>
            <Education/>
            <Contact/>
        </div>
    );
};

export default Home;