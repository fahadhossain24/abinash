import React, { useState } from 'react';

const NomineeInformation = ({ onNext }) => {
    const [formValue, setFormValue] = useState('');

    const isFormValue = formValue.trim() !== 'ss';
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 ml-2 lg:ml-[150px]'>
                {/* Nominee 01 */}
                <div>
                    <label className='text-black border-2 border-secondary border-solid font-bold text-2xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-xl'>Nominee-01 Information</label><br />
                    <div className='mt-5'>
                        <div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Nominee <span className='text-secondary font-bold'>01</span>-Name <span className='text-red-600'>*</span></label><br />
                                <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Nominee <span className='text-secondary font-bold'>01</span>-Relation <span className='text-red-600'>*</span></label><br />
                                <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Nominee <span className='text-secondary font-bold'>01</span>-Number <span className='text-red-600'>*</span></label><br />
                                <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Nominee <span className='text-secondary font-bold'>01</span>-Distribution <span className='text-red-600'>*</span></label><br />
                                <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nominee 02  */}
                <div>
                    <label className='text-black border-2 border-secondary border-solid font-bold text-2xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-xl'>Nominee-02 Information</label><br />
                    <div className='mt-5'>
                        <div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Nominee <span className='text-secondary font-bold'>02</span>-Name <span className='text-red-600'>*</span></label><br />
                                <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Nominee <span className='text-secondary font-bold'>02</span>-Relation <span className='text-red-600'>*</span></label><br />
                                <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Nominee <span className='text-secondary font-bold'>02</span>-Number <span className='text-red-600'>*</span></label><br />
                                <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Nominee <span className='text-secondary font-bold'>02</span>-Distribution <span className='text-red-600'>*</span></label><br />
                                <input type='text' className='w-[75%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type='button' onClick={onNext} className='bg-secondary text-white py-1 px-8 cursor-pointer mt-[244px] text-2xl block mx-auto rounded' disabled={!isFormValue}>Submit</button>
        </div>
    );
};

export default NomineeInformation;