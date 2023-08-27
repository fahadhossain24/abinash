import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faCaretDown, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Abinash foundation logo 1.png';
import fmtlImg from '../../images/FMTL 1.png';
import fincaImg from '../../images/FINCA 1.png';
import islImg from '../../images/ASL 1.png';
import fincaHousingImg from '../../images/FINCA Housing  1.png';
import missionImg from '../../images/target_3721184 1.png'
import businessmanHandImg from '../../images/businessman_1253770 1.png'
import adviceImg from '../../images/advice_7078251 1.png'
import img1 from '../../images/image 1.png'
import img2 from '../../images/image 2.png'
import img3 from '../../images/image 3.png'
import img4 from '../../images/image 4.png'

const Header = ({ myStyle }) => {
    const [isMenuShow, setIsMenuShow] = useState(false);

    

    return (
        <div>
            <div className={`w-[540px] ${myStyle}  lg:w-full`}>
                {/* logo address and social icon */}
                <div className='w-[540px] mx-left lg:w-[1300px] lg:mx-auto logoInfo '>
                    <div className='logo ml-3 flex'>
                        <img className='w-[92px] h-[87px] pb-1 pt-2' src={logo} alt='logo' />
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
                <div className={isMenuShow ? 'navMenu w-[540px] lg:w-[1300px] h-[220px] lg:h-[90px] rounded-3xl bg-secondary mx-auto block text-black' : 'navMenu w-[540px] lg:w-[1300px] h-[220px] lg:h-[90px] rounded-3xl bg-secondary mx-auto hidden mb-2 lg:block text-black'}>
                    <span><Link to='/home'>Home</Link></span>

                    <span className='relative menu-item'>
                        <Link to='/services'>Services <FontAwesomeIcon icon={faCaretDown} /></Link>
                        <div className='dropdown-content dropdownMenu rounded-xl w-[220px] ml-[-50px]'>
                            <p><img src={fmtlImg} alt='FTML'/><Link to='/dps'>DPS</Link></p>
                            <p><img src={fincaImg} alt='FINCA'/><Link to='/fda'>FDA</Link></p>
                            <p><img src={islImg} alt='ISL'/><Link to='/financial-consultation'>Financial Consultation</Link></p>
                        </div>
                    </span>

                    <span className='relative menu-item'>
                        <Link to='/our-concern'>Our Concern</Link>
                        <div className='dropdown-content dropdownMenu rounded-xl w-[284px] ml-[-70px]'>
                            <p><img src={fmtlImg} alt='FTML'/><Link to='/dps'>FINCA Medico Technology</Link></p>
                            <p><img src={fincaImg} alt='FINCA'/><Link to='/fda'>FINCA Education</Link></p>
                            <p><img src={islImg} alt='ISL'/><Link to='/financial-consultation'>Abinash Shipping Lines</Link></p>
                            <p><img src={fincaHousingImg} alt='ISL'/><Link to='/financial-consultation'>FINCA Property Management</Link></p>
                        </div>
                    </span> 
                    <span><Link to='/media'>Media</Link></span>
                    <span><Link to='/news'>News</Link></span>

                    <span className='relative menu-item'>
                        <Link to='/about'>About Us <FontAwesomeIcon icon={faCaretDown} /></Link>
                        <div className='dropdown-content dropdownMenu rounded-xl w-[144px]'>
                            <p><img src={missionImg} alt='FTML'/><Link to='/dps'>Mission</Link></p>
                            <p><img src={businessmanHandImg} alt='FINCA'/><Link to='/fda'>Vission</Link></p>
                            <p><img src={adviceImg} alt='ISL'/><Link to='/financial-consultation'>MD Speech</Link></p>
                        </div>
                    </span>
                    
                    <span className='relative menu-item'>
                        <Link to='/get-in-touch'>Get In Touch <FontAwesomeIcon icon={faCaretDown} /></Link>
                        <div className='dropdown-content dropdownMenu rounded-xl w-[144px]'>
                            <p><img src={img1} alt='FTML'/><Link to='/job-circular'>Job Circular</Link></p>
                            <p><img src={img2} alt='FINCA'/><Link to='/notice'>Notice</Link></p>
                            <p><img src={img3} alt='ISL'/><Link to='/csr'>CSR</Link></p>
                            <p><img src={img4} alt='ISL'/><Link to='/contact-us'>Contact Us</Link></p>
                        </div>
                    </span>
                    
                    <span><Link to='/apply-membership'>Apply Membership</Link></span>
                    <span><Link to='/login'>Login</Link></span>
                </div>
            </div>
        </div>
    );
};

export default Header;