import React from 'react';
import HeaderSlider from '../shaired-components/HeaderSlider';
import Footer from '../shaired-components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';


const ApplyForMembership = () => {
    const handleMemberApplyForm = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <HeaderSlider></HeaderSlider>
            <div className='w-[540px] lg:w-[1300px] mx-auto'>
                <h2 className='Service-headline mb-[30px] text-center'>Member Apply Form</h2>
                <form onSubmit={handleMemberApplyForm}>
                    <div className='mb-3 grid gap-2 grid-cols-1 lg:grid-cols-3'>
                        <div>
                            <label className='text-black font-bold text-sm mr-8'>Member ID no:</label>
                            <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                        </div>
                        <div>
                            <label className='text-black font-bold text-sm mr-8'>Application Date:</label>
                            <input type='Date' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                        </div>
                        <div>
                            <label className='text-black font-bold text-sm mr-8'>Applicant Photo:</label>
                            <label className='bg-secondary text-white py-2 px-4 cursor-pointer'>Upload <FontAwesomeIcon icon={faUpload} /><input type="file" id="myfile" name="myfile" className='hidden' required />
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className='text-black font-bold text-sm bg-[#adcdea] px-2 pr-[40px] rounded-2xl'>Personal Information</label><br />
                        <div className='grid grid-cols-2 lg:grid-cols-5 ml-2 lg:ml-0'>
                            <div>
                                <label className='text-black font-semibold text-sm'>Name</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Name (Bangali)</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Father's Name</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />                        </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Mother's Name</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>DOB</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>NID no</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Mobile no</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Meritial Status</label><br />
                                <input type="radio" id="merried" name="meritial-status" value="merried" />
                                <label for="merried" className='ml-2 mr-6'>Merried</label>
                                <input type="radio" id="unMerried" name="meritial-status" value="unmerried" />
                                <label for="unMerried" className='ml-2'>Unmerried</label>
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>NID copy</label><br />
                                <input type="file" id="myfile" name="myfile" required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Application Signeture</label><br />
                                <input type="file" id="myfile" name="myfile" required />
                            </div>

                        </div>
                    </div>
                    {/* job description  */}
                    <div>
                        <label className='text-black font-bold text-sm bg-[#adcdea] px-2 pr-[40px] rounded-2xl'>Job Destription</label><br />
                        <div className='grid grid-cols-2 lg:grid-cols-5 ml-2 lg:ml-0'>
                            <div>
                                <label className='text-black font-semibold text-sm'>Name of Designation</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Hospital/Organization Name</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Duty Ward Name</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />                        </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Familiar Colleagues <span className='text-secondary font-bold'>01</span>-Name</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Familiar Colleagues <span className='text-secondary font-bold'>01</span>-Number</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Familiar Colleagues <span className='text-secondary font-bold'>02</span>-Name</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Familiar Colleagues <span className='text-secondary font-bold'>02</span>-Number</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Familiar Colleagues <span className='text-secondary font-bold'>03</span>-Name</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Familiar Colleagues <span className='text-secondary font-bold'>03</span>-Number</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                        </div>
                    </div>
                    {/* present Address */}
                    <div>
                        <label className='text-black font-bold text-sm bg-[#adcdea] px-2 pr-[40px] rounded-2xl'>Present Address</label><br />
                        <div className='grid grid-cols-2 lg:grid-cols-5 ml-2 lg:ml-0'>
                            <div>
                                <label className='text-black font-semibold text-sm'>Village/House NO</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Post office/Road No</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Union/Ward</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />                        </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Thana/Upazila</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>District</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                        </div>
                    </div>
                    {/* permanent address */}
                    <div>
                        <label className='text-black font-bold text-sm bg-[#adcdea] px-2 pr-[40px] rounded-2xl'>Permanent Address</label><br />
                        <div className='grid grid-cols-2 lg:grid-cols-5 ml-2 lg:ml-0'>
                            <div>
                                <label className='text-black font-semibold text-sm'>Village/House NO</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Post office/Road No</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Union/Ward</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />                        </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Thana/Upazila</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>District</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                        </div>
                    </div>
                    {/* familly information */}
                    <div>
                        <label className='text-black font-bold text-sm bg-[#adcdea] px-2 pr-[40px] rounded-2xl'>Family Information</label> <label className='text-black font-bold text-sm bg-[#adcdea] px-2 pr-[40px] rounded-2xl ml-[340px]'>Licensing Ability</label><br />
                        <div className='grid grid-cols-2 lg:grid-cols-5 ml-2 lg:ml-0'>
                            <div>
                                <label className='text-black font-semibold text-sm'>Husband/Wife's Phone No</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Father/Brother/Sister's Phone No</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>BNMC Reg. No(if any)</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />                        </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>BNMC Reg. Year</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>District</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                        </div>
                    </div>
                    {/* educational information  */}
                    <div>
                        <label className='text-black font-bold text-sm bg-[#adcdea] px-2 pr-[40px] rounded-2xl'>Educational Information</label><br />
                        <div className='educational-info-table w-[800px] mt-2'>
                            <table className='w-full text-xl text-center'>
                                <tr>
                                    <th>Exam Name</th>
                                    <th>Passing Year</th>
                                    <th>Institution's Name</th>
                                </tr>
                                <tr>
                                    <td><input className='w-full outline-none px-2' type='text' /></td>
                                    <td><input className='w-full outline-none px-2' type='text' /></td>
                                    <td><input className='w-full outline-none px-2' type='text' /></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    {/* nominee information */}
                    <div>
                        <label className='text-black font-bold text-sm bg-[#adcdea] px-2 pr-[40px] rounded-2xl'>Nominee Information</label><br />
                        <div className='grid grid-cols-2 lg:grid-cols-5 ml-2 lg:ml-0'>
                            <div>
                                <label className='text-black font-semibold text-sm'>Nominee <span className='text-secondary font-bold'>01</span>-Name</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Nominee <span className='text-secondary font-bold'>01</span>-Relationship</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Nominee <span className='text-secondary font-bold'>01</span>-Distribution %</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 lg:grid-cols-5 ml-2 lg:ml-0'>
                            <div>
                                <label className='text-black font-semibold text-sm'>Nominee <span className='text-secondary font-bold'>02</span>-Name</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Nominee <span className='text-secondary font-bold'>02</span>-Relationship</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                            <div>
                                <label className='text-black font-semibold text-sm'>Nominee <span className='text-secondary font-bold'>02</span>-Distribution %</label><br />
                                <input type='text' className='w-[250px] h-[25px] p-2 border-2 border-black rounded' required />
                            </div>
                        </div>
                    </div>
                    <input type='submit' value='Submit' className='bg-secondary text-white py-2 px-4 cursor-pointer ml-[250px] lg:ml-[650px] mt-3 text-2xl rounded'/>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ApplyForMembership;