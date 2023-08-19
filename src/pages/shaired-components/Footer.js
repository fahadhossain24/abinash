import { faFacebookF, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import location from '../../images/location.jpg'

const Footer = () => {
    return (
        <div className='w-full bg-[#0081c3]'>
                <div className='w-[540px] lg:w-[1300px] mx-auto flex mt-[50px]'>
                    <div className='w-[25%] p-8 text-white lg:leading-7 text-[10px] lg:text-[18px]'>
                        <div>
                            <h2 className='text-[12px] lg:text-2xl font-medium'>Our Services</h2>
                            <p>DPS</p>
                            <p>FDA</p>
                            <p>Financial Consultation</p>
                            <p className='mt-3 lg:text-2xl font-medium'>Contact With Us</p>
                        </div>
                        <div className='flex gap-4 text-[10px] lg:text-2xl ml-4 my-3 mb-4'>
                            <a href='#'><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href='#' className='text-[#cd201f]'><FontAwesomeIcon icon={faYoutube} /></a>
                            <a href='#'><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                    <div className='w-[25%] p-8 text-white lg:leading-7 text-[10px] lg:text-[18px]'>
                        <div>
                            <h2 className='text-[12px] lg:text-2xl font-medium'>About Us</h2>
                            <p>Mission</p>
                            <p>Vission</p>
                            <p>MD Speech</p>
                        </div>
                    </div>
                    <div className='w-[25%] p-8 text-white lg:leading-7 text-[10px] lg:text-[18px]'>
                        <div>
                            <h2 className='text-[12px] lg:text-2xl font-medium'>Quick Links</h2>
                            <p>DPS</p>
                            <p>FDA</p>
                            <p>Career</p>
                            <p>Financial Consultation</p>
                        </div>
                    </div>
                    <div className='w-[25%] p-8 text-white lg:leading-7 text-[10px] lg:text-[18px]'>
                        <div>
                            <h2 className='text-[12px] lg:text-2xl font-medium'>Our Location</h2>
                            <img className='mt-2' src={location}/>
                            <p>22/I/1, Borobagh, Mirpur-2, Dhaka-1216</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Footer;