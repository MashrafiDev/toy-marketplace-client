import moment from 'moment/moment';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-cyan-50'>
            <footer className="footer p-10 bg-base-200 bg-cyan-50 text-base-content">
                <div className=''>
                    <img src="https://i.ibb.co/RTghpq4/Logo.png" alt="" />
                    <h4 className='ms-3 font font-semibold'>Providing reliable tech since 2012</h4>
                    <div className='flex ms-3'>
                        <a href="https://www.facebook.com/" target='blank'><FaFacebook className='me-1 text-blue-600' /></a>
                        <a href="https://www.linkedin.com/feed/" target='blank'><FaLinkedin className='mx-1 text-[#0077B5]' /></a>
                        <a href="https://github.com/" target='blank'> <FaGithub className='ms-1 text-[#171515]' /></a>
                    </div>
                </div>
                <div>
                    <span className="font-semibold text-lg">Services</span>
                    <a className="link link-hover subpixel-antialiased font-medium text-black">Branding</a>
                    <a className="link link-hover subpixel-antialiased font-medium text-black">Design</a>
                    <a className="link link-hover subpixel-antialiased font-medium text-black">Marketing</a>
                    <a className="link link-hover subpixel-antialiased font-medium text-black">Advertisement</a>
                </div>
                <div>
                    <span className="font-semibold text-lg">Company</span>
                    <a className="link link-hover subpixel-antialiased font-medium text-black">About us</a>
                    <a className="link link-hover subpixel-antialiased font-medium text-black">Contact</a>
                    <a className="link link-hover subpixel-antialiased font-medium text-black">Jobs</a>
                    <a className="link link-hover subpixel-antialiased font-medium text-black">Press kit</a>
                </div>
                <div>
                    <span className="font-semibold text-lg">Legal</span>
                    <a className="link link-hover subpixel-antialiased font-medium text-black">Terms of use</a>
                    <a className="link link-hover subpixel-antialiased font-medium text-black">Privacy policy</a>
                    <a className="link link-hover subpixel-antialiased font-medium text-black">Cookie policy</a>
                </div>
                <div>
                    <span className="font-semibold text-lg">Address</span>
                    <a className="link link-hover subpixel-antialiased font-medium text-black"> Level-4, 34, Awal Centre, Banani, Dhaka</a>
                    <a className="link link-hover subpixel-antialiased font-medium text-black"> Support: example@gmail.com</a>
                    <a className="link link-hover subpixel-antialiased font-medium text-black">Helpline: 013********</a>
                    <a className="link link-hover subpixel-antialiased font-medium text-black">(Available : Sat - Thu, 10:00 AM to 7:00 PM)</a>
                </div>
            </footer>
            <div>
                <h2 className='text-center font-semibold pb-5'>  Copyright © 2012 - {
                    moment().format('YYYY')
                } TermsFeed®. All rights reserved.</h2>
            </div>
        </div>
    );
};

export default Footer;