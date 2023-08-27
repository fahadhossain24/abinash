import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const PersonalInformation = ({ onNext }) => {
    const [formValue, setFormValue] = useState('sfgdf');

    const isFormValue = formValue.trim() !== '';
    return (
        <div>
            <label className='text-black border-2 border-secondary border-solid font-bold text-2xl text-2xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-xl lg:ml-[150px]'>Personal Information</label><br />
            <div className='grid grid-cols-1 lg:grid-cols-3 ml-2 lg:ml-[150px] mt-5'>
                <div>
                    <div>
                        <label className='text-black font-semibold text-lg'>Name <span className='text-red-600'>*</span></label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                    </div>
                    <div>
                        <label className='text-black font-semibold text-lg'>Father's Name <span className='text-red-600'>*</span></label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                    </div>
                    <div>
                        <label className='text-black font-semibold text-lg'>Date of Birth <span className='text-red-600'>*</span></label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required /></div>
                    <div>
                        <label className='text-black font-semibold text-lg'>Mobile Number <span className='text-red-600'>*</span></label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                    </div>
                    <div>
                        <label className='text-black font-semibold text-lg'>Maritial Status <span className='text-red-600'>*</span></label><br />
                        <select className='w-[75%] h-[38px] p-2 border-2 border-black rounded-2xl mt-1' >
                            <option value="married">Married</option>
                            <option value="unmarried">Unmarried</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <label className='text-black font-semibold text-lg'>Name (Bangali) <span className='text-red-600'>*</span></label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                    </div>
                    <div>
                        <label className='text-black font-semibold text-lg'>Mother's Name <span className='text-red-600'>*</span></label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                    </div>
                    <div>
                        <label className='text-black font-semibold text-lg'>NID Number <span className='text-red-600'>*</span></label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                    </div>
                    <div>
                        <label className='text-black font-semibold text-lg'>E-mail <span className='text-red-600'>*</span></label><br />
                        <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                    </div>
                    <div>
                        <label className='text-black font-semibold text-lg'>E-mail <span className='text-red-600'>*</span></label><br />
                        <input type='date' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                    </div>

                </div>
                <div>
                    <div className='mt-3'>
                        <label className='text-black font-semibold text-lg'>Applicant Photo: <span className='text-red-600'>*</span></label>
                        <input type="file" id="myfile" name="myfile" className="border border-gray-300 px-4 py-2 rounded-xl cursor-pointer" required />
                    </div>
                    <div className='mt-3'>
                        <label className='text-black font-semibold text-lg'>NID copy: <span className='text-red-600'>*</span></label>
                        <label><input type="file" id="myfile" name="myfile" className="border border-gray-300 px-4 py-2 rounded-xl cursor-pointer" required />
                        </label>
                    </div>
                    <div className='mt-3'>
                        <label className='text-black font-semib ld text-lg'>Signeture: <span className='text-red-600'>*</span></label>
                        <label><input type="file" id="myfile" name="myfile" className="border border-gray-300 px-4 py-2 rounded-xl cursor-pointer" required />
                        </label>
                    </div>
                </div>

            </div>
            <button type='button' onClick={onNext} disabled={!isFormValue} className='bg-secondary text-white py-1 px-8 cursor-pointer mt-[175px] text-2xl block mx-auto rounded'>Next</button>
        </div>
    );
};

export default PersonalInformation;