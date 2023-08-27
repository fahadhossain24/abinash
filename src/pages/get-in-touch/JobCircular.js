import React from 'react';
import Header from '../shaired-components/Header';
import Footer from '../shaired-components/Footer';
import SingleJob from './SingleJob';
import jobLogo1 from '../../images/994059e4fa2ace95ff675a5283708379--logo-creation-short-stories-removebg-preview.png';
import jobLogo2 from '../../images/85876ccf51f6ba5fb82c2816b4625ead-removebg-preview.png';
import jobLogo3 from '../../images/d0c751cf3e0e127dee764c61460458de-removebg-preview.png';

const JobCircular = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-[540px] lg:w-[1300px] mx-auto mt-5'>
            <div className='text-black border-2 border-secondary border-solid font-bold text-center text-3xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 rounded-lg mx-auto w-[15%] h-[9%] bg-gray-300 shadow-xl'>Job Circular</div>
            <SingleJob jobDetails = {{
                logo: jobLogo1,
                title: 'Accounts Officer',
                description: 'Financial company that provide the DPS and FDH services and as well as Financial consultation. Lorem ipsum has been the industries...',
                salary: 'Negotiable',
                exprience: '0 to 1 years',
                deadline: '23rd August 2023'
            }}></SingleJob>
            <SingleJob jobDetails = {{
                logo: jobLogo2,
                title: 'Human Resource & Management',
                description: 'Financial company that provide the DPS and FDH services and as well as Financial consultation. Lorem ipsum has been the industries...',
                salary: 'Negotiable',
                exprience: '1 to 2 years',
                deadline: '30th August 2023'
            }}></SingleJob>
            <SingleJob jobDetails = {{
                logo: jobLogo3,
                title: 'Consultant',
                description: 'Financial company that provide the DPS and FDH services and as well as Financial consultation. Lorem ipsum has been the industries...',
                salary: 'Negotiable',
                exprience: '2 years',
                deadline: '29th August 2023'
            }}></SingleJob>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default JobCircular;