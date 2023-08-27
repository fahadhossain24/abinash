import React from 'react';
import logo from '../../images/Abinash foundation logo 1.png';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
    }
    return (
        <div> 
            <div className='w-[400px] lg:w-[600px] h-[500px] lg:h-[420px] bg-[#d6e8f8] mx-auto text-center myLogin'>
                <div className='w-[120px] h-[120px] mx-auto mb-8 my-auto mt-[130px]'>
                    <img className='w-full pt-3' src={logo} alt='logo'/>
                </div>
                <div className='px-8'>
                    <form onSubmit={handleLogin}>
                        <label className='text-black text-[22px] font-semibold mr-4 '>User Name</label>
                        <input type="text" placeholder='enter your username here' required className='border-2 border-accent w-[335px] h-[50px] rounded-[12px] bg-[#FEFCFC] text-[#00000099] px-3 text-[22px] border-1 border-[#ccc] shadow-md mb-4' />
                        <label className='text-black text-[22px] font-semibold mr-8'>Password</label>
                        <input type="text" placeholder='enter your username here' required className='border-2 border-accent w-[335px] h-[50px] rounded-[12px] bg-[#FEFCFC] text-[#00000099] px-3 text-[22px] border-1 border-[#ccc] shadow-md' /><br/>
                        <input type='submit' value='LOGIN' className='w-[200px] h-[50px] bg-secondary rounded-[12px] text-[22px] text-white ml-8 mt-5 cursor-pointer hover:bg-accent'/>
                        <p className='text-black font-medium mt-4'>If you forgot your password then click <span className='text-secondary'>Send Password</span></p>
                        <p className='text-black font-medium mt-1'>Don't have an account? Click <Link to='/registration' className='text-secondary'>SignUp</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;