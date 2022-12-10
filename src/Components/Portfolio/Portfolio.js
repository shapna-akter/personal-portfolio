import React from 'react';
import image1 from '../../assets/projectsImage/project1.jpg'
import image2 from '../../assets/projectsImage/project2.jpg'
import image3 from '../../assets/projectsImage/project3.jpg'
import image4 from '../../assets/projectsImage/project4.jpg'
import image5 from '../../assets/projectsImage/project5.jpg'
import image6 from '../../assets/projectsImage/project6.png'

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            name: 'Furniture Row',
            image: image1,
        },
        {
            id: 2,
            name: 'The Moments',
            image: image2,
        },
        {
            id: 3,
            name: 'Tech Educa',
            image: image3,
        },
        {
            id: 4,
            name: 'Learn With Educare',
            image: image4,
        },
        {
            id: 5,
            name: 'Daily Activities',
            image: image5,
        },
        {
            id: 6,
            name: 'Best Five Players',
            image: image6,
        },
    ]

    return (
        <div className='my-12 text-center'>
            <h2 className='text-5xl text-center font-bold my-12'>My Recent <span className='text-amber-600'>Projects</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 m-12'>
                {
                    projects?.map(project =>
                        <div key={project.id} project={project}>
                            <figure><img className='h-64 w-full' src={project.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{project.name}</h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
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