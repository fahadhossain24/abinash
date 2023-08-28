import React from 'react';
import Header from '../shaired-components/Header';
import Footer from '../shaired-components/Footer';

const Notice = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-[540px] lg:w-[1300px] mx-auto mt-5'>
            <div className='text-black border-2 border-secondary border-solid font-bold text-center text-3xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 rounded-lg mx-auto w-[10%] h-[9%] bg-gray-300 shadow-xl'>Notice</div>
            <h2 className='text-center text-xl font-semibold text-gray-400 py-[180px]'><span className='text-3xl text-slate-600 font-bold'>No</span> Notice for new, Please check back later</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Notice;