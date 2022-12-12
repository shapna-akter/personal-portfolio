import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PortfolioDetails = () => {
    const projectDetails = useLoaderData();
    console.log(projectDetails);
    const { clientCode, description, img1, img2, img3, liveLink, serverCode, technologies } = projectDetails;
    return (
        <section>
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="grid grid-cols-2 gap-5">
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                <h3 className="text-xl font-bold text-amber-600">Technologies: </h3>
                                <p className="mt-3 font-medium">{technologies}</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                <h3 className="text-xl font-bold text-amber-600">About Project: </h3>
                                <p className="mt-3">{description}</p>
                                <div className='text-blue-700 font-bold mt-6'>
                                    <a href={liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    > Live Site
                                    </a> ||
                                    <a href={clientCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    > Client-Site Code
                                    </a> ||
                                    <a href={serverCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    > Server-Site Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioDetails;