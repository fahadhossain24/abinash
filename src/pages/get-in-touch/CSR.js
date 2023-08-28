import React from 'react';
import Header from '../shaired-components/Header';
import Footer from '../shaired-components/Footer';
import SingleCSR from './SingleCSR';
import csrImg from '../../images/businessman-podium-speaking-conference 1.png'

const CSR = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-[540px] lg:w-[1300px] mx-auto mt-5'>
                <div className='text-black border-2 border-secondary border-solid font-bold text-center text-3xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 rounded-lg mx-auto w-[37%] h-[10%] bg-gray-300 shadow-xl mb-[90px]'>Corporate Social Responsibility</div>
                <div className='flex gap-5 justify-center flex-wrap'>
                <SingleCSR csrDetails = {{
                    img: csrImg,
                    title: 'Seminar on global warming',
                    date: '12th July 2023'
                }}></SingleCSR>
                <SingleCSR csrDetails = {{
                    img: csrImg,
                    title: 'Seminar on global warming',
                    date: '12th July 2023'
                }}></SingleCSR>
                <SingleCSR csrDetails = {{
                    img: csrImg,
                    title: 'Seminar on global warming',
                    date: '12th July 2023'
                }}></SingleCSR>
                <SingleCSR csrDetails = {{
                    img: csrImg,
                    title: 'Seminar on global warming',
                    date: '12th July 2023'
                }}></SingleCSR>
                <SingleCSR csrDetails = {{
                    img: csrImg,
                    title: 'Seminar on global warming',
                    date: '12th July 2023'
                }}></SingleCSR>
                <SingleCSR csrDetails = {{
                    img: csrImg,
                    title: 'Seminar on global warming',
                    date: '12th July 2023'
                }}></SingleCSR>
                <SingleCSR csrDetails = {{
                    img: csrImg,
                    title: 'Seminar on global warming',
                    date: '12th July 2023'
                }}></SingleCSR>
                <SingleCSR csrDetails = {{
                    img: csrImg,
                    title: 'Seminar on global warming',
                    date: '12th July 2023'
                }}></SingleCSR>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CSR;