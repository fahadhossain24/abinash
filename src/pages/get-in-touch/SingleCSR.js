import React from 'react';

const SingleCSR = ({csrDetails}) => {
    const {img, title, date} = csrDetails;
    return (
        <div className='w-[250px]'>
            <img src={img} className='w-[90%] rounded-xl' alt='CSR'/>
            <p className='text-xl'>{title}</p>
            <p>Date: {date}</p>
        </div>
    );
};

export default SingleCSR;