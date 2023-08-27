import React, { useState } from 'react';

const OthersInfo = ({ onNext }) => {
    const [formValue, setFormValue] = useState('hh');

    const isFormValue = formValue.trim() !== '';
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>

                    {/* family information  */}
                    <div>
                        <label className='text-black border-2 border-secondary border-solid font-bold text-2xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-xl lg:ml-[150px]'>Family Information</label><br />
                        <div className='ml-2 lg:ml-[150px] mt-5'>
                            <div>
                                <div>
                                    <label className='text-black font-semibold text-lg'>Husband/Wife's Phone No <span className='text-red-600'>*</span></label><br />
                                    <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                                </div>
                                <div>
                                    <label className='text-black font-semibold text-lg'>Father/Brother/Sister's Phone No <span className='text-red-600'>*</span></label><br />
                                    <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* licensing ability */}
                    <div className='mt-10'>
                        <label className='text-black border-2 border-secondary border-solid font-bold text-2xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-xl lg:ml-[150px]'>Licensing Information</label><br />
                        <div className='ml-2 lg:ml-[150px]  '>
                            <div>
                                <div>
                                    <label className='text-black font-semibold text-lg'>BNMC Reg. No(if only) <span className='text-red-600'>*</span></label><br />
                                    <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                                </div>
                                <div>
                                    <label className='text-black font-semibold text-lg'>BNMC Reg. Year <span className='text-red-600'>*</span></label><br />
                                    <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-3'>
                    <label className='text-black border-2 border-secondary border-solid font-bold text-2xl bg-gradient-to-br text-transparent bg-clip-text from-blue-800 via-blue-800 to-blue-300 px-3 rounded-xl lg:ml-[150px]'>Educational Information</label><br />
                    <div className='ml-2 lg:ml-[150px] mt-5'>
                        <div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Exam Name <span className='text-red-600'>*</span></label><br />
                                <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Institute Name <span className='text-red-600'>*</span></label><br />
                                <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Passing Year <span className='text-red-600'>*</span></label><br />
                                <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-lg'>Board <span className='text-red-600'>*</span></label><br />
                                <input type='text' className='w-[85%] h-[35px] p-2 border-2 border-black rounded-2xl mt-1' required />
                            </div>
                        </div>
                    </div>
                    <button type='button' className='bg-secondary text-white py-1 px-8 cursor-pointer text-xl block mr-4 ml-[470px] mt-2 rounded'>Add</button>  
                </div>
            </div>
            <div>
                <table className='w-[80%] mx-auto mt-2 table-auto'>
                    <tr className='text-2xl h-[50px]'>
                        <th>Exam Name</th>
                        <th>Passing Year</th>
                        <th className='w-[400px]'>Institutes Name</th>
                        <th>Board</th>
                    </tr>
                    <tr>
                        <td><input type='text' className='w-full text-2xl p-2 outline-0' /></td>
                        <td><input type='text' className='w-full text-2xl p-2 outline-0' /></td>
                        <td><input type='text' className='w-full text-2xl p-2 outline-0' /></td>
                        <td><input type='text' className='w-full text-2xl p-2 outline-0' /></td>
                    </tr>
                    <tr>
                        <td><input type='text' className='w-full text-2xl p-2 outline-0' /></td>
                        <td><input type='text' className='w-full text-2xl p-2 outline-0' /></td>
                        <td><input type='text' className='w-full text-2xl p-2 outline-0' /></td>
                        <td><input type='text' className='w-full text-2xl p-2 outline-0' /></td>
                    </tr>
                </table>
            </div>
            <button type='button' onClick={onNext} className='bg-secondary text-white py-1 px-8 cursor-pointer mt-[10px] text-2xl block mx-auto rounded' disabled={!isFormValue}>Next</button>
        </div>
    );
};

export default OthersInfo;