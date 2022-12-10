import React from 'react';

const Skills = () => {
    const skills = [
        {
            id: 1,
            name: 'HTML5',
        },
        {
            id: 2,
            name: 'CSS3',
        },
        {
            id: 3,
            name: 'Bootstrap',
        },
        {
            id: 4,
            name: 'JavaScript',
        },
        {
            id: 5,
            name: 'React',
        },
        {
            id: 6,
            name: 'ExpressJs',
        },
        {
            id: 7,
            name: 'NodeJs',
        },
        {
            id: 8,
            name: 'MongoDB',
        },
        {
            id: 9,
            name: 'Firebase',
        },
        {
            id: 10,
            name: 'GitHub',
        },
        {
            id: 10,
            name: 'TailwindCSS',
        },
        {
            id: 11,
            name: 'Figma',
        },
    ]
    return (
        <div className='my-12 text-center'>
            <h2 className='text-5xl text-center font-bold my-12'>My <span className='text-amber-600'>Skills</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {
                    skills?.map(skill =>
                        <div key={skill.id} project={skill}>
                            <div className="card-body">
                                <h2 className="bg-teal-200 p-2 font-bold">{skill.name}</h2>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Skills;