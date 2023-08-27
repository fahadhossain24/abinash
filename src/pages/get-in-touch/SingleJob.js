import React from 'react';

const SingleJob = ({ jobDetails }) => {
    const { logo, title, description, salary, exprience, deadline } = jobDetails;
    return (
        <div className='w-[88%] flex mx-auto mt-8 gap-3'>
            <div className='bg-[#8CD5FAB2] flex p-4 gap-3 items-center rounded-xl'>
                <div className=''>
                    <img src={logo} alt="job-logo" />
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-[#025A8A]'>{title}</h2>
                    <p className='text-lg'><span className='text-xl font-bold text-[#025A8A]'>Job Description:</span> {description}</p>
                    <p className='text-lg'><span className='text-xl font-bold text-[#025A8A]'>Salary:</span>  {salary}</p>
                    <p className='w-[45%] inline-block text-lg'><span className='text-xl font-bold text-[#025A8A]'>Exprience:</span>  {exprience}</p>
                    <p  className='w-[45%] inline-block text-lg'><span className='text-xl font-bold text-[#025A8A]'>Deadline:</span>  {deadline}</p>
                    <button className='w-[10%] bg-white font-semibold text-lg'>Details &gt;</button>
                </div>
            </div>
            <div className='w-[12%] bg-secondary text-white font-semibold text-lg mt-[135px] px-3 h-8 rounded-lg'>
                <button>Apply &gt;</button>
            </div>
        </div>
    );
};

export default SingleJob;