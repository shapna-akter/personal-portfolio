import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const Portfolio = () => {

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
        <div className='mt-24 text-center'>
            <h2 className='text-5xl text-center font-bold my-12'>My Recent <span className='text-amber-600'>Projects</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:px-12 px-4' data-aos="zoom-in-up" data-aos-duration="1000">
                {
                    projects?.map(project =>
                        <div key={project._id} className='shadow-lg'>
                            <figure><img className='h-64 w-full' src={project.bgImage} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{project.title}</h2>
                                <p className='text-left'>{project.heading}</p>
                                <div className="card-actions justify-end">
                                    <Link
                                        className='btn btn-sm bg-[#40ABB0] text-white hover:bg-teal-700' to={`/details/${project._id}`}
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