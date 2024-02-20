import React from 'react';

const Education = () => {
    return (
        <div className='mt-24'>
            <h2 className='text-5xl text-center font-bold mb-12'>Experiences <span className='text-amber-600'>And</span> Education</h2>
            <div className='grid grid-cols-2 gap-12 px-12'>
                <div className="flex flex-col gap-5">
                    <h3 className="text-3xl font-bold text-amber-600">Experiences</h3>
                    <div>
                        <h3 className="text-2xl font-semibold ">Frontend Developer </h3>
                        <h4 className='font-medium'>Tangle, Remote, USA, Full-Time</h4>
                        <p>February 2023 - February 2024</p>
                        <h5 className="text-lg font-semibold">Responsibilities:</h5>
                        <ul>
                            <li>Transform design concepts into visually appealing, user-friendly websites using Reactjs.
                            </li>
                            <li>Design websites based on Figma files, ensuring full responsiveness across various devices.
                            </li>
                            <li>Integrate APIs and implement user status management (active, inactive, block, unblock etc).</li>
                            <li>Develop dynamic dashboards with intricate routing.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold ">Frontend Developer </h3>
                        <h4 className='font-medium'>Associate Application Developer, Internship</h4>
                        <p>December 2022 - February 2023</p>
                        <h5 className="text-lg font-semibold">Responsibilities:</h5>
                        <ul>
                            <li>Create fully responsive templates based on Figma files.
                            </li>
                            <li>Integrate user authentication features using Firebase (signup, login).
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h3 className="text-3xl font-bold text-amber-600">Education</h3>
                    <div>
                        <h3 className="text-xl font-semibold tracking-wide">Master of Business Studies - MBS, Accounting</h3>
                        <h3 className='font-medium'>Dhaka City College</h3>
                        <p>Division: First Class</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold tracking-wide">Bachelor of Business Studies - BBS, Accounting</h3>
                        <h3 className='font-medium'>Dhaka City College</h3>
                        <p>Division: First Class</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold tracking-wide">Higher Secondary School - HSC, Business Studies</h3>
                        <h3 className='font-medium'>Azimpur Girl's School and College</h3>
                        <p>Grade: 4.10</p>
                    </div>
                </div>

                {/* <div>
                <section>
                    <div className="container max-w-5xl px-4 mx-auto mt-24">
                        <div className="grid gap-4 mx-4 sm:grid-cols-12">
                            <div className="col-span-12 sm:col-span-3">
                                <div className="text-center sm:text-left mb-12">
                                    <h3 className="text-3xl font-bold text-amber-600">Education</h3>
                                </div>
                            </div>
                            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                                <div className="flex flex-col gap-5">
                                    <div>
                                        <h3 className="text-xl font-semibold tracking-wide">Master of Business Studies - MBS, Accounting</h3>
                                        <h3 className='font-medium'>Dhaka City College</h3>
                                        <p>Division: First Class</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold tracking-wide">Bachelor of Business Studies - BBS, Accounting</h3>
                                        <h3 className='font-medium'>Dhaka City College</h3>
                                        <p>Division: First Class</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold tracking-wide">Higher Secondary School - HSC, Business Studies</h3>
                                        <h3 className='font-medium'>Azimpur Girl's School and College</h3>
                                        <p>Grade: 4.10</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div> */}
            </div>
        </div>
    );
};

export default Education;