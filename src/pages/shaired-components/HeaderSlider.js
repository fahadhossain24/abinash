import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/chattogram-removebg-preview.png';
import banner1 from '../../images/banner1.jpg'
import banner3 from '../../images/banner3.jpg'
import { faLocationDot, faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const HeaderSlider = () => {
    const [isServicesHover, setIsServicesHover] = useState(false);
    const [isConcernHover, setIsConcernHover] = useState(false);
    const [isAboutHover, setIsAboutHover] = useState(false);
    const [isGetInTouchHover, setIsGetInTouchHover] = useState(false);
    const [isMenuShow, setIsMenuShow] = useState(false);
    return (
        <div>
            <div className='relative' onClick={() => { setIsAboutHover(false); setIsServicesHover(false); setIsConcernHover(false); setIsGetInTouchHover(false) }}>
                <div className="carousel w-full h-[600px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={banner1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-12 top-[60%]">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={banner3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-12 top-[60%]">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* carousel close  */}
            <div className="flex justify-center w-full py-2 gap-2 absolute top-[560px]">
                <a href="#slide1" className="btn btn-xs">1</a>
                <a href="#slide2" className="btn btn-xs">2</a>
            </div>

            <div className='top-header absolute w-[540px] top-[35px] lg:w-full'>
                {/* logo address and social icon */}
                <div className='w-[540px] mx-left lg:w-[1300px] lg:mx-auto logoInfo text-white'>
                    <div className='logo ml-3 flex'>
                        <img className='w-[92px] h-[87px]' src={logo} />
                        <span onClick={() => { setIsMenuShow(!isMenuShow) }} className='text-3xl mt-7 lg:hidden cursor-pointer'><FontAwesomeIcon icon={faBars} /></span>
                    </div>
                    <div className='info mr-7'>
                        <div className='details'>
                            <div><FontAwesomeIcon icon={faLocationDot} /></div>
                            <div>
                                <p>22/I/1, Borobagh,</p>
                                <p>Mirpur-2, Dhaka-1216</p>
                            </div>
                        </div>
                        <div className='top-social-icon'>
                            <a href='#'><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href='#'><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                </div>

                {/* navbar */}
                <div className={isMenuShow ? 'navMenu w-[540px] lg:w-[1300px] h-[220px] lg:h-[90px] rounded-3xl bg-secondary mx-auto block text-black' : 'navMenu w-[540px] lg:w-[1300px] h-[220px] lg:h-[90px] rounded-3xl bg-secondary mx-auto hidden lg:block text-black'}>
                    <span><Link to='/home'>Home</Link></span>
                    <span onMouseEnter={() => { setIsServicesHover(true); setIsConcernHover(false); setIsAboutHover(false); setIsGetInTouchHover(false) }}><Link to='/services'>Services <FontAwesomeIcon icon={faCaretDown} /></Link></span>
                    <span onMouseEnter={() => { setIsConcernHover(true); setIsServicesHover(false); setIsAboutHover(false); setIsGetInTouchHover(false) }}><Link to='/our-concern'>Our Concern</Link></span>
                    <span><Link to='/media'>Media</Link></span>
                    <span><Link to='/news'>News</Link></span>
                    <span onMouseEnter={() => { setIsAboutHover(true); setIsGetInTouchHover(false); setIsConcernHover(false); setIsServicesHover(false) }}><Link to='/about'>About Us <FontAwesomeIcon icon={faCaretDown} /></Link></span>
                    <span onMouseEnter={() => { setIsGetInTouchHover(true); setIsAboutHover(false); setIsServicesHover(false); setIsConcernHover(false) }}><Link to='/get-in-touch'>Get In Touch <FontAwesomeIcon icon={faCaretDown} /></Link></span>
                    <span><Link to='/apply-membership'>Apply Membership</Link></span>
                    <span><Link to='/login'>Login</Link></span>
                </div>
            </div>
            {/* dropdown menu  */}
            <div className={isServicesHover ? 'dropdownMenuForServices w-[223px] absolute top-[230px] left-[140px] bg-secondary rounded-2xl h-[167px] pt-5 pl-5 ' : 'dropdownMenuForServices w-[223px] absolute top-[230px] left-[-1140px] bg-secondary rounded-2xl h-[167px] pt-5 pl-5 '}>
                <div className="arrow-up"></div>
                <div>
                    <p><Link to='/home'>DPS</Link></p>
                    <p><Link to='/home'>FDH</Link></p>
                    <p><Link to='/home'>Financial Consultation</Link></p>
                </div>
            </div>
            <div className={isConcernHover ? 'dropdownMenuForConcern w-[284px] absolute top-[230px] left-[250px] bg-secondary rounded-2xl h-[210px] pt-5 pl-5 ' : 'dropdownMenuForConcern w-[284px] absolute top-[230px] left-[-1250px] bg-secondary rounded-2xl h-[210px] pt-5 pl-5 '}>
                <div className="arrow-up"></div>
                <div>
                    <p><Link to='/home'>FINCA Medico Technology Ltd.</Link></p>
                    <p><Link to='/home'>FINCA Education</Link></p>
                    <p><Link to='/home'>Abinash Shipping Lines Ltd.</Link></p>
                    <p><Link to='/home'>FINCA Property Management Ltd.</Link></p>
                </div>
            </div>
            <div className={isAboutHover ? 'dropdownAboutMenu w-[223px] absolute top-[280px] lg:top-[230px] left-[140px] lg:left-[600px] bg-secondary rounded-2xl h-[167px] pt-5 pl-5 ' : 'dropdownAboutMenu w-[223px] absolute top-[230px] left-[-1600px] bg-secondary rounded-2xl h-[167px] pt-5 pl-5 '}>
                <div className="arrow-up"></div>
                <div>
                    <p><Link to='/home'>Mission</Link></p>
                    <p><Link to='/home'>Vission</Link></p>
                    <p><Link to='/home'>MD Speech</Link></p>
                </div>
            </div>
            <div className={isGetInTouchHover ? 'dropdownGetInTouchMenu w-[223px] absolute top-[280px] lg:top-[230px] left-[270px] lg:left-[740px] bg-secondary rounded-2xl h-[200px] pt-5 pl-5 ' : 'dropdownGetInTouchMenu w-[223px] absolute top-[230px] left-[-1700px] bg-secondary rounded-2xl h-[167px] pt-5 pl-5 '}>
                <div className="arrow-up"></div>
                <div>
                    <p><Link to='/home'>Job Circular</Link></p>
                    <p><Link to='/home'>Notice</Link></p>
                    <p><Link to='/home'>CSR</Link></p>
                    <p><Link to='/home'>Contact Us</Link></p>
                </div>
            </div>
        </div>
    );
};

export default HeaderSlider;