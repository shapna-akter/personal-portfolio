import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Skills from '../AboutMe/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Education from '../AboutMe/Education';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Skills/>
            <Portfolio/>
            <Education/>
            <Contact/>
        </div>
    );
};

export default Home;