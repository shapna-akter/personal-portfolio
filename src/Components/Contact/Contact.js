import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3kfgtln', 'template_hfcxpd8', form.current, 'M0YmbAYVLZXZOjJkn')
            .then((result) => {
                toast.success('Message sent successfully')
            }, (error) => {
                toast.error('Please Try Again')
            });
            e.target.reset();
    };

    return (
        <div>
            <section className="mt-24" data-aos="fade-up"
            data-aos-duration="1000">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                    <h2 className='text-5xl font-bold'>Get In <span className='text-amber-600'>Touch</span></h2>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Dhaka, Bangladesh</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>+8801676345030</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>shapna.akter0622@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <form
                        ref={form} onSubmit={sendEmail}
                        className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input type="text" name="user_name" placeholder="Your Name" className="block w-full rounded-md shadow-sm p-2 mt-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email</span>
                            <input type="email" name="user_email" placeholder="Your Email" className="block w-full rounded-md shadow-sm p-2 mt-2" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea rows="3" name="message" className="block w-full rounded-md mt-2 p-2"></textarea>
                        </label>
                        <button type="submit" className="btn bg-[#40ABB0] hover:bg-teal-700 px-8 py-3 text-white text-lg rounded ">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;