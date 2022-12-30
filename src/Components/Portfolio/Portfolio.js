import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const Portfolio = () => {
    // const [projects, setProjects] = useState()

    // useEffect(() => {
    //     fetch('https://assignment-12-server-jet.vercel.app/projects')
    //         .then(res => res.json())
    //         .then(data => setProjects(data))
    // }, [])

    const { data: projects, isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            try {
                const res = await fetch('https://assignment-12-server-jet.vercel.app/projects', {
                })
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    if(isLoading){
        return <Spinner></Spinner>
    }

    return (
        <div className='my-12 text-center'>
            <h2 className='text-5xl text-center font-bold my-12'>My Recent <span className='text-amber-600'>Projects</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-12' data-aos="zoom-in-up">
                {
                    projects?.map(project =>
                        <div key={project._id} className='shadow-lg'>
                            <figure><img className='h-64 w-full' src={project.bgImage} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{project.title}</h2>
                                <p className='text-left'>{project.heading}</p>
                                <div className="card-actions justify-end">
                                    <Link
                                        className='btn btn-primary' to={`/details/${project._id}`}
                                    >View Details
                                    </Link>
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