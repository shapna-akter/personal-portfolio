import React from 'react';
import image1 from '../../assets/projectsImage/project1.jpg'
import image2 from '../../assets/projectsImage/project2.jpg'
import image3 from '../../assets/projectsImage/project3.jpg'

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            name: 'Furniture Row',
            image: image1,
            description: 'Created this project based on buy and selling products.',
            btn: <a href="https://assignment-12-de85a.web.app/" target="_blank" rel="noopener noreferrer">
                <button className='btn btn-primary font-bold'>View Details</button>
            </a>
        },
        {
            id: 2,
            name: 'The Moments',
            image: image2,
            description: 'Created this project based on Photography.',
            btn: <a href="https://assignment-11-client-a0b66.web.app/" target="_blank" rel="noopener noreferrer">
                <button className='btn btn-primary font-bold'>View Details</button>
            </a>
        },
        {
            id: 3,
            name: 'Tech Educa',
            image: image3,
            description: 'Created this project based on learning web development.',
            btn: <a href="https://tech-educa.web.app/" target="_blank" rel="noopener noreferrer">
                <button className='btn btn-primary font-bold'>View Details</button>
            </a>
        }
    ]

    return (
        <div className='my-12 text-center'>
            <h2 className='text-5xl text-center font-bold my-12'>My Recent <span className='text-amber-600'>Projects</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-12'>
                {
                    projects?.map(project =>
                        <div key={project.id} project={project}>
                            <figure><img className='h-64 w-full' src={project.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{project.name}</h2>
                                <p className='text-left'>{project.description}</p>
                                <div className="card-actions justify-end">
                                    {project.btn}
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