import React, { useState } from 'react';

const Address = ({ onNext }) => {
    const [formValue, setFormValue] = useState('ss');

    const isFormValue = formValue.trim() !== '';
    return (
        <div>
            {/* present Address */}
            <div>
                <label className='text-black border-2 border-secondary border-solid font-bold text-2xl text-2xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-xl lg:ml-[150px]'>Present Address</label><br />
                <div className='grid grid-cols-1 lg:grid-cols-3 ml-2 lg:ml-[150px] mt-5'>
                    <div>
                        <div>
                            <label className='text-black font-semibold text-lg'>Village/House No <span className='text-red-600'>*</span></label><br />
                            <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                        </div>

                        <div>
                            <label className='text-black font-semibold text-lg'>Thana/Upazila <span className='text-red-600'>*</span></label><br />
                            <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className='text-black font-semibold text-lg'>Road No <span className='text-red-600'>*</span></label><br />
                            <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                        </div>
                        <div>
                            <label className='text-black font-semibold text-lg'>District <span className='text-red-600'>*</span></label><br />
                            <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className='text-black font-semibold text-lg'>Union/Ward <span className='text-red-600'>*</span></label><br />
                            <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                        </div>
                        <div>
                            <label className='text-black font-semibold text-lg'>Postal Code <span className='text-red-600'>*</span></label><br />
                            <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                        </div>

                    </div>
                </div>
            </div>

            {/* permanent Address  */}
            <div className='mt-12'>
                <label className='text-black border-2 border-secondary border-solid font-bold text-2xl text-2xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-xl lg:ml-[150px]'>Permanent Address</label><input type='checkbox' className='h-4 w-5 ml-8' /><label className="ml-2 text-xl font-semibold">Mark if the information is same as before</label><br />
                <div className='grid grid-cols-1 lg:grid-cols-3 ml-2 lg:ml-[150px] mt-5'>
                <div>
                        <div>
                            <label className='text-black font-semibold text-lg'>Village/House No <span className='text-red-600'>*</span></label><br />
                            <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                        </div>

                        <div>
                            <label className='text-black font-semibold text-lg'>Thana/Upazila <span className='text-red-600'>*</span></label><br />
                            <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className='text-black font-semibold text-lg'>Road No <span className='text-red-600'>*</span></label><br />
                            <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                        </div>
                        <div>
                            <label className='text-black font-semibold text-lg'>District <span className='text-red-600'>*</span></label><br />
                            <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className='text-black font-semibold text-lg'>Union/Ward <span className='text-red-600'>*</span></label><br />
                            <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                        </div>
                        <div>
                            <label className='text-black font-semibold text-lg'>Postal Code <span className='text-red-600'>*</span></label><br />
                            <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                        </div>

                    </div>
                </div>
            </div>
            <button type='button' onClick={onNext} className='bg-secondary text-white py-1 px-8 cursor-pointer mt-[144px] text-2xl block mx-auto rounded' disabled={!isFormValue}>Next</button>
        </div>
    );
};

export default Address;