import React from 'react';
import skill1 from '../../assets/skills/1.png'
import skill2 from '../../assets/skills/2.png'
import skill3 from '../../assets/skills/3.png'
import skill4 from '../../assets/skills/4.jpg'
import skill5 from '../../assets/skills/5.png'
import skill6 from '../../assets/skills/6.png'
import skill7 from '../../assets/skills/7.png'
import skill8 from '../../assets/skills/8.png'
import skill9 from '../../assets/skills/9.png'
import skill10 from '../../assets/skills/10.png'
import skill11 from '../../assets/skills/11.jpg'
import skill12 from '../../assets/skills/12.png'

const Skills = () => {
    const skills = [
        {
            id: 1,
            image: skill1
        },
        {
            id: 2,
            image: skill2
        },
        {
            id: 3,
            image: skill3
        },
        {
            id: 4,
            image: skill4
        },
        {
            id: 5,
            image: skill5
        },
        {
            id: 6,
            image: skill6
        },
        {
            id: 7,
            image: skill7
        },
        {
            id: 8,
            image: skill8
        },
        {
            id: 9,
            image: skill9
        },
        {
            id: 10,
            image: skill10
        },
        {
            id: 11,
            image: skill11
        },
        {
            id: 12,
            image: skill12
        },
    ]
    return (
        <div className='flex flex-col justify-center items-center my-12'>
            <h3 className="text-3xl font-bold mb-12"> My <span className='text-amber-600'>Skills</span></h3>
            
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 px-12 lg:px-0'>
                {
                    skills?.map(skill =>
                        <div key={skill.id} project={skill}>
                            <div className="avatar">
                                <div className="lg:w-24 rounded-full">
                                    <img src={skill.image} alt='' />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
           
        </div>
    );
};

export default Skills;

// className="relative col-span-12 px-4 space-y-6 sm:col-span-9"