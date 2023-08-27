import React from 'react';
import Header from '../shaired-components/Header';
import Footer from '../shaired-components/Footer';
import { Link } from 'react-router-dom';

const Registration = ({ setMenuHover }) => {
    return (
        <div>

            <Header></Header>
            
            <div className='w-[400px] lg:w-[500px] h-[500px] lg:h-[540px] mx-auto mt-5'>
            <div className='text-black border-2 border-secondary border-solid font-bold text-3xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-lg lg:ml-[150px] w-[50%] h-[9%] bg-gray-300 shadow-xl'>Create Account</div>
                <div>
                    <div className='mt-5'>
                        <label className='text-black font-semibold text-lg'>Name <span className='text-red-600'>*</span></label><br />
                        <input type='text' className='w-[95%] h-[40px] p-2 border-2 bg-[#f7fbfc] border-[#bbb] rounded-lg mt-1' required />
                    </div>
                    <div className='mt-4'>
                        <label className='text-black font-semibold text-lg'>Mobile Number <span className='text-red-600'>*</span></label><br />
                        <input type='text' className='w-[95%] h-[40px] p-2 border-2 bg-[#f7fbfc] border-[#bbb] rounded-lg mt-1' required />
                    </div>
                    <div className='mt-4'>
                        <label className='text-black font-semibold text-lg'>E-mail <span className='text-red-600'>*</span></label><br />
                        <input type='email' className='w-[95%] h-[40px] p-2 border-2 bg-[#f7fbfc] border-[#bbb] rounded-lg mt-1' required /></div>
                    <div className='mt-4'>
                        <label className='text-black font-semibold text-lg'>Set Password <span className='text-red-600'>*</span></label><br />
                        <input type='password' className='w-[95%] h-[40px] p-2 border-2 bg-[#f7fbfc] border-[#bbb] rounded-lg mt-1' required />
                    </div>
                    <div className='mt-4'>
                        <label className='text-black font-semibold text-lg'>Re-enter Password <span className='text-red-600'>*</span></label><br />
                        <input type='password' className='w-[95%] h-[40px] p-2 border-2 bg-[#f7fbfc] border-[#bbb] rounded-lg mt-1' required />
                    </div>
                    <input type='submit' value='Create' className='w-[100px] h-[30px] bg-secondary rounded-lg text-[18px] text-white ml-[180px] mt-5 cursor-pointer hover:border-2 hover:border-accent font-semibold'/>
                    <p className='text-black font-medium mt-2 text-center'>Already have an account? Please <Link to='/login' className='text-secondary'>Login</Link></p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Registration;