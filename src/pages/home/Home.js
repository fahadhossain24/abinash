import React, { useState } from 'react';
import './home.css';
import tree2 from '../../images/tree2.jpg';
import teamImage1 from '../../images/download.jpg'
import teamImage2 from '../../images/download (1).jpg'
import teamImage3 from '../../images/istockphoto-970370246-612x612.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowRight, faServer, faHeadphones, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'
import HeaderSlider from '../shaired-components/HeaderSlider';
import Footer from '../shaired-components/Footer';


const Home = () => {
    const [leftIcon, setleftIcon] = useState(faServer);
    const [leftText, setLeftText] = useState('Get a wide range of financial services');
    const [middleIcon, setMiddleIcon] = useState(faHouse);
    const [middleText, setMiddleText] = useState('Your trusted saving partner');
    const [rightIcon, setRightIcon] = useState(faHeadphones);
    const [RightText, setRightText] = useState('Get the most useful functional advice');

    return (
        <div className='mx-auto'>
            {/* carousel */}
            <HeaderSlider></HeaderSlider>

            {/* our services start */}

            <div className='w-full h-[1100px] bg-[#4ab9f2]'>
                <div className='w-full h-[60%] lg:h-[50%] bg-white services-round-up'>
                    <div className=' w-[540px] lg:w-[1300px] mx-auto bg-white h-[0px]'>
                        <h2 className='Service-headline mb-[30px] text-center'>Our Services</h2>
                        <div className='p- grid grid-cols-2 ml-[17px] lg:grid-cols-4 gap-6 lg:gap-24'>
                            <div className='w-[200px] h-[200px] bg-[#4AB9F2] rounded-full pt-[50px] pl-[60px] text-5xl text-white'>
                                <p>DPS</p>
                            </div>
                            <div className='w-[200px] h-[200px] bg-[#Df7D23] rounded-full pt-[50px] pl-[60px] text-5xl text-white'>
                                <p>FDH</p>
                            </div>
                            <div className='w-[200px] h-[200px] bg-[#4b8Ef3] rounded-full pt-[50px] pl-[15px] text-3xl text-white'>
                                <p>Consultation</p>
                            </div>
                            <div className='w-[200px] h-[200px] bg-[#23ead2] rounded-full pt-[50px] pl-[25px] text-4xl text-white'>
                                <p>About Us</p>
                            </div>
                        </div>
                        <button className='w-[100px] lg:w-[140px] h-[25px] lg:h-[40px] rounded border-2 border-secondary hover:bg-secondary hover:text-white lg:text-2xl font-semibold text-center block mx-auto mb-[-30px] lg:mb-[80px] mt-[40px] text-black'>See All <FontAwesomeIcon icon={faArrowRight} /></button>
                        <h2 className='Service-headline text-center myAbinash'>Why ABINASH ?</h2>
                    </div>
                </div>
                <div className='w-full h-[25%] lg:h-[40%]'></div>
                <div className='w-full h-[15%] lg:h-[10%] bg-white services-round-bottom'></div>

                <div className=' w-[540px] lg:w-[1300px] mx-auto flex flex-row justify-center gap-10 mt-[-350px] lg:mt-[-480px]'>
                    <div className='w-[100px] lg:w-[300px] h-[100px] lg:h-[300px] bg-[#217aab] p-4 hover:border-2 hover:border-accent' id='card1'>
                        <span className='text-[28px] lg:text-[110px] ml-[10px] lg:ml-[60px] '><FontAwesomeIcon icon={leftIcon} /></span>
                        <h2 className='text-[5px] lg:text-[25px] font-medium lg:mt-5'>{leftText}</h2>
                    </div>
                    <span onClick={() => {
                        setMiddleIcon(leftIcon);
                        setMiddleText(leftText);
                        setleftIcon(middleIcon);
                        setLeftText(middleText)
                    }} className=' text-[15px] lg:text-[30px] text-black mt-[30px] lg:mt-[120px] cursor-pointer block'><FontAwesomeIcon icon={faArrowLeft} /></span>
                    <div className=' w-[120px] lg:w-[340px] h-[120px] lg:h-[340px] bg-[#217aab] p-4 mt-[-10px] lg:mt-[-20px] hover:border-2 hover:border-accent'>
                        <span className='text-[35px] lg:text-[110px] ml-[20px] lg:ml-[80px] text-white'><FontAwesomeIcon icon={middleIcon} /></span>
                        <h2 className='text-[10px] lg:text-[25px] text-white font-medium lg:mt-5'>{middleText}</h2>
                    </div>
                    <span onClick={() => {
                        setMiddleIcon(rightIcon);
                        setMiddleText(RightText);
                        setRightIcon(middleIcon);
                        setRightText(middleText)
                    }} className='text-[15px] lg:text-[30px] text-black mt-[30px] lg:mt-[120px] cursor-pointer block'><FontAwesomeIcon icon={faArrowRight} /></span>
                    <div className='w-[100px] lg:w-[300px] h-[100px] lg:h-[300px] bg-[#217aab] p-4 hover:border-2 hover:border-accent' id='card2'>
                        <span className=' text-[28px] lg:text-[110px] ml-[10px] lg:ml-[60px]'><FontAwesomeIcon icon={rightIcon} /></span>
                        <h2 className=' text-[5px] lg:text-[25px] font-medium lg:mt-5'>{RightText}</h2>
                    </div>
                </div>
                <button className='w-[100px] lg:w-[140px] h-[25px] lg:h-[40px] rounded border-2 border-secondary hover:bg-secondary hover:text-white  lg:text-2xl font-semibold text-center block mx-auto mt-[100px] lg:mt-[80px] text-black'>See All <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>

            {/* our services section end */}
            {/* recent news and articles section start */}
            <h2 className='Service-headline text-center myAbinash'>Recent News and Articles</h2>
            <div className=' w-[540px] lg:w-[1300px] mx-auto flex flex-row justify-center gap-x-10 ]'>
                <div className='w-[100px] lg:w-[300px] h-[100px] lg:h-[300px] bg-[#217aab] hover:border-2 hover:border-accent' id='card1'>
                    <span className=''><img className='w-[100%] h-[70%]' src={tree2} /></span>
                    <h2 className='text-[10px] lg:text-[25px] font-medium lg:mt-2 ml-[5px] text-white'>Tree Plantation Program Went Successful</h2>
                </div>
                <span className=' text-[15px] lg:text-[30px] text-black mt-[30px] lg:mt-[120px] cursor-pointer block'><FontAwesomeIcon icon={faArrowLeft} /></span>
                <div className=' w-[120px] lg:w-[340px] h-[120px] lg:h-[340px] bg-[#217aab] mt-[-10px] lg:mt-[-20px] hover:border-2 hover:border-accent'>
                    <span className=''><img className='w-[100%] h-[70%]' src={teamImage2} /></span>
                    <h2 className='text-[10px] lg:text-[25px] font-medium lg:mt-2 ml-[5px] text-white'>New Agreement with xyz Company</h2>
                </div>
                <span className='text-[15px] lg:text-[30px] text-black mt-[30px] lg:mt-[120px] cursor-pointer block'><FontAwesomeIcon icon={faArrowRight} /></span>
                <div className='w-[100px] lg:w-[300px] h-[100px] lg:h-[300px] bg-[#217aab] hover:border-2 hover:border-accent' id='card2'>
                    <span className=''><img className='w-[100%] h-[70%]' src={tree2} /></span>
                    <h2 className='text-[10px] lg:text-[25px] font-medium lg:mt-2 ml-[5px] text-white'>Our Social Activities Rose to a New Level</h2>
                </div>
            </div>
            <button className='w-[150px] lg:w-[190px] h-[25px] lg:h-[40px] rounded border-2 border-secondary hover:bg-secondary hover:text-white  lg:text-2xl font-semibold text-center block mx-auto mt-[100px] lg:mt-[80px] text-black'>See All News <FontAwesomeIcon icon={faArrowRight} /></button>
            {/* recent news and articles section end  */}

            {/* quick links start  */}
            <h2 className='Service-headline text-center myAbinash'>Quick Link</h2>
            <div className=' w-[540px] lg:w-[1300px] mx-auto flex flex-row justify-center gap-x-10 ]'>
                <div className='w-[100px] lg:w-[300px] h-[100px] lg:h-[300px] bg-[#217aab] hover:border-2 hover:border-accent' id='card1'>
                    <span className=''><img className='w-[100%] h-[70%]' src={teamImage2} /></span>
                    <h2 className='text-[10px] lg:text-[25px] font-medium lg:mt-2 ml-[5px] text-white text-center'>DPS From</h2>
                </div>
                <div className=' w-[100px] lg:w-[300px] h-[100px] lg:h-[300px] bg-[#217aab] hover:border-2 hover:border-accent'>
                    <span className=''><img className='w-[100%] h-[70%]' src={teamImage3} /></span>
                    <h2 className='text-[10px] lg:text-[25px] font-medium lg:mt-2 ml-[5px] text-white text-center'>Membership Apply</h2>
                </div>
                <div className='w-[100px] lg:w-[300px] h-[100px] lg:h-[300px] bg-[#217aab] hover:border-2 hover:border-accent' id='card2'>
                    <span className=''><img className='w-[100%] h-[70%]' src={teamImage1} /></span>
                    <h2 className='text-[10px] lg:text-[25px] font-medium lg:mt-2 ml-[5px] text-white text-center'>Career</h2>
                </div>
            </div>
            <button className='w-[150px] lg:w-[190px] h-[25px] lg:h-[40px] rounded border-2 border-secondary hover:bg-secondary hover:text-white  lg:text-2xl font-semibold text-center block mx-auto mt-[100px] lg:mt-[80px] text-black'>See All News <FontAwesomeIcon icon={faArrowRight} /></button>
            {/* quick links end */}

            {/* footer start */}
            <Footer></Footer>

        </div>
    );
};

export default Home;