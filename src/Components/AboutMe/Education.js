import React from 'react';

const Education = () => {
    return (
        <div>
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
        </div>
    );
};

export default Education;