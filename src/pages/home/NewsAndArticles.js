import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import wateringSaplingPlant from '../../images/close-up-picture-hand-watering-sapling-plant 1.png';
import businessShakingHand from '../../images/businessmen-shaking-hands-while-another-is-writing 1.png'
import volenteer from '../../images/different-people-doing-volunteer-work 1.png'

const NewsAndArticles = () => {
    return (
        <div>
            <h2 className='Service-headline text-center myAbinash'>Recent News and Articles</h2>
            <div className=' w-[540px] lg:w-[1300px] mx-auto flex flex-row justify-center gap-x-10 ]'>
                <div className='w-[100px] lg:w-[300px] h-[100px] lg:h-[300px] bg-[#217aab] hover:border-2 hover:border-accent' id='card1'>
                    <span className=''><img className='w-[100%] h-[70%]' src={wateringSaplingPlant} alt='Plant' /></span>
                    <h2 className='text-[10px] lg:text-[25px] font-medium lg:mt-2 ml-[5px] text-white'>Tree Plantation Program Went Successful</h2>
                </div>
                <span className=' text-[15px] lg:text-[30px] text-black mt-[30px] lg:mt-[120px] cursor-pointer block'><FontAwesomeIcon icon={faArrowLeft} /></span>
                <div className=' w-[120px] lg:w-[340px] h-[120px] lg:h-[340px] bg-[#217aab] mt-[-10px] lg:mt-[-20px] hover:border-2 hover:border-accent'>
                    <span className=''><img className='w-[100%] h-[70%]' src={businessShakingHand} alt='Hand shaking' /></span>
                    <h2 className='text-[10px] lg:text-[25px] font-medium lg:mt-2 ml-[5px] text-white'>New Agreement with xyz Company</h2>
                </div>
                <span className='text-[15px] lg:text-[30px] text-black mt-[30px] lg:mt-[120px] cursor-pointer block'><FontAwesomeIcon icon={faArrowRight} /></span>
                <div className='w-[100px] lg:w-[300px] h-[100px] lg:h-[300px] bg-[#217aab] hover:border-2 hover:border-accent' id='card2'>
                    <span className=''><img className='w-[100%] h-[70%]' src={volenteer} alt='volenteer'/></span>
                    <h2 className='text-[10px] lg:text-[25px] font-medium lg:mt-2 ml-[5px] text-white'>Our Social Activities Rose to a New Level</h2>
                </div>
            </div>
            <button className='w-[150px] lg:w-[190px] h-[25px] lg:h-[40px] rounded border-2 border-secondary hover:bg-secondary hover:text-white  lg:text-2xl font-semibold text-center block mx-auto mt-[100px] lg:mt-[80px] text-black'>See All News <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default NewsAndArticles;