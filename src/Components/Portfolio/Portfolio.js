import React, { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import image1 from '../../assets/projectsImage/project1.jpg'
// import image2 from '../../assets/projectsImage/project2.jpg'
// import image3 from '../../assets/projectsImage/project3.jpg'

const Portfolio = () => {
    const [projects, setProjects] = useState()

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className='my-12 text-center'>
            <h2 className='text-5xl text-center font-bold my-12'>My Recent <span className='text-amber-600'>Projects</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-12' data-aos="zoom-in-up">
                {
                    projects?.map(project =>
                        <div key={project.id} project={project} className='shadow-lg'>
                            <figure><img className='h-64 w-full' src={project.bgImage} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{project.title}</h2>
                                <p className='text-left'>{project.description}</p>
                                <div className="card-actions justify-end">
                                    <a href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    > <FaExternalLinkAlt className='text-blue-900'></FaExternalLinkAlt>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Portfolio;