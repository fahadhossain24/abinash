import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const JobDescription = ({onNext}) => {
    const [formValue, setFormValue] = useState('dd');

    const isFormValue = formValue.trim() !== '';
    return (
        <div>
            <label className='text-black border-2 border-secondary border-solid font-bold text-2xl text-2xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-xl lg:ml-[150px]'>Job Description</label><br />
            <div className='grid grid-cols-1 lg:grid-cols-2 ml-2 lg:ml-[150px] mt-5'>
                <div>
                    <div>
                        <label className='text-black font-semibold text-lg'>Name of Designation <span className='text-red-600'>*</span></label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                    </div>
                    <div>
                        <label className='text-black font-semibold text-lg'>Duty Ward Name <span className='text-red-600'>*</span></label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                    </div>
                    <div>
                        <label className='text-black font-semibold text-lg'>Familiar Colleagues <span className='text-secondary font-bold'>01</span>-Name <span className='text-red-600'>*</span></label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                    </div>
                    <div>
                        <label className='text-black font-semibold text-lg'>Familiar Colleagues <span className='text-secondary font-bold'>02</span>-Name <span className='text-red-600'>*</span></label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                    </div>
                    <div>
                        <label className='text-black font-semibold text-lg'>Familiar Colleagues <span className='text-secondary font-bold'>03</span>-Name</label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' />
                    </div>
                </div>
                <div>
                    <div>
                        <label className='text-black font-semibold text-lg'>Hospital / Organization Name <span className='text-red-600'>*</span></label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                    </div>
                    <div>
                        <label className='text-black font-semibold text-lg'>Duty Shift</label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' />
                    </div>
                    <div>
                        <label className='text-black font-semibold text-lg'>Familiar Colleagues <span className='text-secondary font-bold'>01</span>-Number <span className='text-red-600'>*</span></label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                    </div>
                    <div>
                        <label className='text-black font-semibold text-lg'>Familiar Colleagues <span className='text-secondary font-bold'>02</span>-Number <span className='text-red-600'>*</span></label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                    </div>
                    <div>
                        <label className='text-black font-semibold text-lg'>Familiar Colleagues <span className='text-secondary font-bold'>03</span>-Number</label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1'/>
                    </div>

                </div>

            </div>
            <button type='button' onClick={onNext} className='bg-secondary text-white py-1 px-8 cursor-pointer mt-[177px] text-2xl block mx-auto rounded' disabled={!isFormValue}>Next</button>
        </div>
    );
};

export default JobDescription;